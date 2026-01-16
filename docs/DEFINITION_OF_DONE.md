# Definition of Done (DoD)

## Purpose

This document defines the quality standards and completion criteria that all work must meet before being considered "Done" in Sprint 1 and beyond. The Definition of Done ensures consistency, quality, and shared understanding across the team.

## When to Use This Document

Reference this document:
- ✅ Before starting any work item
- ✅ During development to track progress
- ✅ Before requesting code review
- ✅ During code review
- ✅ Before moving an issue to "Done" column
- ✅ During sprint retrospectives

## General Definition of Done

For any work item to be considered "Done", it must meet ALL of the following criteria:

### 1. Code Complete ✅

- [ ] All code for the feature/fix is written
- [ ] Code follows project coding standards and conventions
- [ ] Code passes linting checks without errors
- [ ] No compiler warnings introduced
- [ ] No debugging code, console.logs, or commented-out code left in
- [ ] No TODO comments without associated issues
- [ ] Code is properly formatted (use auto-formatter)

### 2. Tested ✅

- [ ] Unit tests written for new functionality
- [ ] Unit test coverage meets minimum threshold (target: 80%+)
- [ ] All unit tests passing locally
- [ ] Integration tests written (if applicable)
- [ ] All integration tests passing
- [ ] Manual testing completed
- [ ] Edge cases tested
- [ ] Error handling tested
- [ ] Performance tested on target platforms
- [ ] No critical (P0) bugs remain
- [ ] No high-severity (P1) bugs remain

### 3. Code Reviewed ✅

- [ ] Self-review completed by author
- [ ] Code reviewed by at least one peer developer
- [ ] All review comments addressed or discussed
- [ ] No unresolved conversations in PR
- [ ] PR approved by reviewer(s)
- [ ] No merge conflicts

### 4. Documented ✅

- [ ] Code has meaningful comments where necessary (not obvious code)
- [ ] Complex algorithms explained
- [ ] Public APIs documented (JSDoc, XML comments, etc.)
- [ ] README updated if needed
- [ ] User-facing documentation updated
- [ ] Architecture documentation updated (for significant changes)
- [ ] Release notes/changelog updated (if applicable)

### 5. Deployed ✅

- [ ] Code merged to main/develop branch
- [ ] Deployed to dev/staging environment
- [ ] Smoke tests passed in target environment
- [ ] No deployment errors or warnings
- [ ] Environment-specific configurations verified
- [ ] Database migrations applied (if applicable)

### 6. Accepted ✅

- [ ] All acceptance criteria in the issue met
- [ ] Product Owner / Stakeholder approval received (if required)
- [ ] QA sign-off received (if applicable)
- [ ] No regression in existing functionality
- [ ] Meets performance requirements
- [ ] Meets accessibility standards (if applicable)

### 7. Project Management ✅

- [ ] Issue/ticket status updated
- [ ] Time logged (if required)
- [ ] Project board updated (moved to "Done")
- [ ] Milestone progress tracked
- [ ] Sprint burndown updated

---

## Platform-Specific DoD

### Client (Unity/Game Code) - area:client

In addition to general DoD:

- [ ] Tested on PC (Windows minimum)
- [ ] Tested on Android (if feature is mobile-compatible)
- [ ] Meets performance targets:
  - [ ] 60 FPS on mid-range PC
  - [ ] 30+ FPS on mid-range Android
- [ ] Memory usage within acceptable limits
- [ ] Build size impact assessed
- [ ] Assets optimized (textures, models)
- [ ] Input tested on all supported platforms
- [ ] No visual glitches or artifacts
- [ ] UI scales properly on different resolutions

### Backend (Server/API) - area:backend

In addition to general DoD:

- [ ] API endpoints documented (Swagger/OpenAPI)
- [ ] Response times meet SLA (<200ms for CRUD operations)
- [ ] Error responses are meaningful and consistent
- [ ] Input validation implemented
- [ ] Authentication/authorization checked
- [ ] Database queries optimized
- [ ] No SQL injection vulnerabilities
- [ ] No N+1 query problems
- [ ] Rate limiting implemented (where needed)
- [ ] Logging added for important operations
- [ ] Monitoring/alerting configured

### Content (Levels/Assets) - area:content

In addition to general DoD:

- [ ] Assets follow naming conventions
- [ ] Assets properly organized in folders
- [ ] Textures properly compressed
- [ ] LODs created (if applicable)
- [ ] Colliders properly configured
- [ ] Lighting baked (if applicable)
- [ ] Level loads without errors
- [ ] No missing prefab references
- [ ] Playtest feedback incorporated
- [ ] Design intent documented

### Infrastructure (CI/CD/DevOps) - infra

In addition to general DoD:

- [ ] Changes tested in isolation
- [ ] No impact on existing pipelines
- [ ] Rollback plan documented
- [ ] Security implications assessed
- [ ] Credentials/secrets properly managed
- [ ] Resource usage optimized
- [ ] Monitoring/alerting configured
- [ ] Documentation updated (runbooks, etc.)
- [ ] Team trained on new tools/processes

---

## Special Cases

### Documentation-Only Changes

For documentation changes:
- [ ] Content is accurate and up-to-date
- [ ] Grammar and spelling checked
- [ ] Links verified (no broken links)
- [ ] Code examples tested
- [ ] Reviewed by at least one person
- [ ] Deployed/published

### Bug Fixes

For bug fixes:
- [ ] Root cause identified and documented
- [ ] Fix addresses root cause (not just symptoms)
- [ ] Regression test added
- [ ] Verified fix doesn't introduce new issues
- [ ] Similar issues checked elsewhere in codebase

### Hotfixes

For urgent production fixes:
- [ ] Severity justified (truly urgent)
- [ ] Tested in production-like environment
- [ ] Rollback plan prepared
- [ ] Stakeholders notified
- [ ] Post-mortem scheduled
- [ ] Normal DoD applied (don't skip quality for speed)

---

## DoD Exceptions

Sometimes, strict adherence to DoD may not be possible. In such cases:

1. **Document the exception**: Why is DoD not fully met?
2. **Get approval**: From Tech Lead and/or Product Owner
3. **Create follow-up issue**: To address the gap
4. **Risk assessment**: What are the implications?
5. **Timeline**: When will the gap be addressed?

**Note**: DoD exceptions should be rare. Frequent exceptions indicate DoD needs revision.

---

## Automated Checks

The following DoD items are enforced automatically via CI/CD:

- ✅ Code linting passes
- ✅ Unit tests pass
- ✅ Code coverage meets threshold
- ✅ Build completes without errors
- ✅ No high-severity security vulnerabilities (CodeQL/Snyk)

**Cannot merge if automated checks fail.**

---

## Quality Gates

Work must pass through these quality gates:

### Gate 1: Developer Ready
- Code written, self-reviewed, tests passing locally
- **Action**: Create pull request

### Gate 2: Peer Review
- Code reviewed by peer, feedback addressed
- **Action**: Approve PR

### Gate 3: Automated Checks
- CI/CD pipeline passes all checks
- **Action**: Automated approval

### Gate 4: QA Ready (if applicable)
- Deployed to dev/staging, smoke tests passing
- **Action**: QA testing

### Gate 5: Done
- All DoD criteria met, stakeholder approval
- **Action**: Close issue, move to Done column

---

## Measuring DoD Compliance

Track DoD compliance metrics:

- **% of issues meeting full DoD**: Target 95%+
- **% requiring DoD exceptions**: Target <5%
- **Average time from "Code Complete" to "Done"**: Target <1 day
- **Bugs found in Review/QA**: Trend should decrease over time

Review these metrics in sprint retrospectives.

---

## Updating This Document

The DoD is a living document. To propose changes:

1. Discuss in team meeting or retrospective
2. Create issue with proposed changes
3. Get team consensus (majority vote)
4. Update document
5. Communicate changes to team

**Last Updated**: January 16, 2026  
**Next Review**: End of Sprint 1 (Jan 29, 2026)

---

## Summary

**Remember**: Done means DONE.
- ✅ No "almost done" or "mostly done"
- ✅ No shortcuts for speed
- ✅ Quality is non-negotiable
- ✅ If it doesn't meet DoD, it's not done

**Questions?** Ask the Tech Lead or Scrum Master.

---

## Quick Checklist

Before moving any issue to "Done", ask yourself:

1. Would I be comfortable shipping this to production? **YES/NO**
2. Would I be comfortable supporting this in production? **YES/NO**
3. Would I be proud to show this to a customer? **YES/NO**
4. Does this meet all DoD criteria? **YES/NO**

**If any answer is NO, the work is NOT done.**
