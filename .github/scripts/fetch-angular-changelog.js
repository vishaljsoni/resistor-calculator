#!/usr/bin/env node
/**
 * fetch-angular-changelog.js
 *
 * Fetches Angular release notes from the GitHub Releases API for all versions
 * between `fromVersion` (exclusive) and `toVersion` (inclusive), then outputs
 * a JSON object with:
 *   - breakingChanges  {string}  Formatted list of BREAKING CHANGE entries
 *   - summary          {string}  Short summary of each release
 *   - releaseCount     {number}  Number of releases in the range
 *   - from             {string}
 *   - to               {string}
 *
 * Usage:
 *   node fetch-angular-changelog.js <fromVersion> <toVersion>
 *
 * Environment:
 *   GITHUB_TOKEN  (optional) — increases the GitHub API rate limit from 60 to 5000 req/hr
 */

'use strict';

const https = require('https');

const [, , fromVersion, toVersion] = process.argv;

if (!fromVersion || !toVersion) {
  process.stderr.write('Usage: node fetch-angular-changelog.js <fromVersion> <toVersion>\n');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Minimal semver comparison – returns true if version `a` is greater than `b`. */
function semverGt(a, b) {
  const pa = String(a).split('.').map((n) => parseInt(n, 10) || 0);
  const pb = String(b).split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i++) {
    if (pa[i] > pb[i]) return true;
    if (pa[i] < pb[i]) return false;
  }
  return false;
}

/** Returns true if `a` <= `b`. */
function semverLte(a, b) {
  return !semverGt(a, b);
}

/** Strips a leading "v" from a version string. */
function stripV(v) {
  return String(v).replace(/^v/, '');
}

/** Fetch a URL and return parsed JSON, following one level of redirects. */
function fetchJson(url, headers) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'angular-dependency-updater/1.0',
        Accept: 'application/vnd.github.v3+json',
        ...headers,
      },
    };

    https
      .get(url, options, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return fetchJson(res.headers.location, headers).then(resolve).catch(reject);
        }

        let raw = '';
        res.on('data', (chunk) => { raw += chunk; });
        res.on('end', () => {
          try {
            resolve(JSON.parse(raw));
          } catch (_) {
            resolve({ _parseError: true, _raw: raw.slice(0, 500) });
          }
        });
      })
      .on('error', reject);
  });
}

/** Fetch all releases from the Angular monorepo on GitHub (up to 5 pages). */
async function fetchAllReleases(headers) {
  const releases = [];
  for (let page = 1; page <= 5; page++) {
    const url = `https://api.github.com/repos/angular/angular/releases?per_page=100&page=${page}`;
    const data = await fetchJson(url, headers);
    if (!Array.isArray(data) || data.length === 0) break;
    releases.push(...data);
    if (data.length < 100) break;
  }
  return releases;
}

/**
 * Extract the BREAKING CHANGES section from a GitHub release body (Markdown).
 * Returns an array of trimmed text blocks (one per "### BREAKING CHANGES" section).
 */
function extractBreakingChanges(body) {
  if (!body) return [];
  const results = [];
  // Match each "## BREAKING CHANGES" or "### BREAKING CHANGES" block (2–3 hashes)
  const bcRegex = /#{2,3}\s*BREAKING CHANGES?\s*\n([\s\S]*?)(?=\n#{2,3}\s|\s*$)/gi;
  let match;
  while ((match = bcRegex.exec(body)) !== null) {
    const text = match[1].trim();
    if (text) results.push(text.slice(0, 1200));
  }
  return results;
}

/** Build a short prose summary of a release body (first non-empty lines). */
function buildSummary(body) {
  if (!body) return '';
  return body
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'))
    .slice(0, 6)
    .join('\n')
    .slice(0, 600);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const headers = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {};

  let releases;
  try {
    releases = await fetchAllReleases(headers);
  } catch (err) {
    output({ error: `Failed to fetch GitHub releases: ${err.message}`, breakingChanges: 'Could not fetch changelog.', summary: 'Could not fetch changelog.', from: fromVersion, to: toVersion, releaseCount: 0 });
    return;
  }

  if (!Array.isArray(releases)) {
    output({ error: 'Unexpected response from GitHub API — possible rate limit.', breakingChanges: 'Could not fetch changelog.', summary: 'Could not fetch changelog.', from: fromVersion, to: toVersion, releaseCount: 0 });
    return;
  }

  const isTargetPreRelease = /-(rc|beta|next|alpha)\.\d+$/.test(toVersion);

  // Filter to releases strictly after fromVersion and up to (including) toVersion
  const relevant = releases.filter((r) => {
    const v = stripV(r.tag_name);
    // Skip pre-releases unless the target version is itself a pre-release
    if (!isTargetPreRelease && /-(rc|beta|next|alpha)\.\d+$/.test(v)) return false;
    return semverGt(v, fromVersion) && semverLte(v, toVersion);
  });

  // Sort ascending by version so we list oldest → newest
  relevant.sort((a, b) => {
    const va = stripV(a.tag_name);
    const vb = stripV(b.tag_name);
    if (semverGt(va, vb)) return 1;
    if (semverGt(vb, va)) return -1;
    return 0;
  });

  const breakingParts = [];
  const summaryParts = [];

  for (const release of relevant) {
    const tag = release.tag_name;
    const body = release.body || '';
    const bcs = extractBreakingChanges(body);
    if (bcs.length > 0) {
      breakingParts.push(`#### ${tag}\n\n${bcs.join('\n\n')}`);
    }
    const sum = buildSummary(body);
    if (sum) {
      summaryParts.push(`**${tag}:** ${sum}`);
    }
  }

  output({
    from: fromVersion,
    to: toVersion,
    releaseCount: relevant.length,
    breakingChanges:
      breakingParts.length > 0
        ? breakingParts.join('\n\n---\n\n')
        : 'No breaking changes detected in this version range.',
    summary:
      summaryParts.length > 0
        ? summaryParts.slice(0, 8).join('\n\n')
        : 'No changelog entries found for this version range.',
  });
}

function output(obj) {
  process.stdout.write(JSON.stringify(obj, null, 2) + '\n');
}

main().catch((err) => {
  output({
    error: err.message,
    breakingChanges: 'Could not fetch changelog.',
    summary: 'Could not fetch changelog.',
    from: fromVersion,
    to: toVersion,
    releaseCount: 0,
  });
  process.exit(0); // Do not fail the calling workflow step
});
