# Sprint 1 Project Scaffolding - Complete Setup Guide

## 📦 What Was Created

This project scaffolding provides a complete GitHub-based project management setup for Sprint 1 of the One Piece–inspired game MVP.

## 📁 Directory Structure

```
.github/
├── ISSUE_TEMPLATE/
│   ├── config.yml                      # Issue template configuration
│   └── sprint-task.md                  # Sprint task issue template
├── pull_request_template.md            # PR template with DoD checklist
└── workflows/
    └── project-automation.yml          # GitHub Actions for project automation

docs/
├── DEFINITION_OF_DONE.md              # Comprehensive DoD document
└── sprint-1/
    ├── README.md                       # Sprint 1 overview and issue index
    ├── SPRINT_PLAN.md                  # Detailed sprint planning document
    ├── PROJECT_BOARD.md                # Project board setup and usage guide
    ├── LABELS.md                       # Label configuration guide
    ├── MILESTONES.md                   # Milestone setup guide
    ├── QUICK_REFERENCE.md              # Quick reference for daily use
    ├── issue-01-player-controller.md   # Issue: Player Controller v0.1
    ├── issue-02-combat-core.md         # Issue: Combat Core
    ├── issue-03-power-framework.md     # Issue: Power Framework + Fruit #1
    ├── issue-04-hub-island.md          # Issue: Hub Island Graybox
    ├── issue-05-backend-scaffolding.md # Issue: Backend Scaffolding
    ├── issue-06-location-unlock.md     # Issue: Location Unlock Prototype
    ├── issue-07-infrastructure.md      # Issue: CI/Crash Logging/Feature Flags
    ├── issue-08-build-targets.md       # Issue: Playable Build Targets
    └── issue-09-dod-checklist.md       # Issue: Definition of Done Checklist
```

## 🚀 Getting Started - Implementation Steps

### Step 1: Create GitHub Labels

Follow the instructions in [docs/sprint-1/LABELS.md](./sprint-1/LABELS.md) to create the required labels:

```bash
gh label create "area:client" --description "Client-side game code and features" --color "0366d6"
gh label create "area:backend" --description "Backend services, APIs, and infrastructure" --color "d73a4a"
gh label create "area:content" --description "Game content, assets, and level design" --color "0e8a16"
gh label create "infra" --description "Infrastructure, CI/CD, and development tools" --color "fbca04"
```

### Step 2: Create Sprint 1 Milestone

Follow the instructions in [docs/sprint-1/MILESTONES.md](./sprint-1/MILESTONES.md) to create the milestone:

- **Title**: Sprint 1
- **Due Date**: January 29, 2026
- **Description**: See milestone guide for full description

### Step 3: Create GitHub Project Board

Follow the instructions in [docs/sprint-1/PROJECT_BOARD.md](./sprint-1/PROJECT_BOARD.md) to set up the project:

1. Navigate to Projects tab
2. Create new project: "Sprint 1 - One Piece Game MVP"
3. Select Board template
4. Configure columns: Backlog, In Progress, In Review, Done
5. Set up sprint dates: Jan 16 - Jan 29, 2026

### Step 4: Create Issues

For each of the 9 issue files in `docs/sprint-1/`:

1. Go to Issues → New Issue
2. Select "Sprint Task" template
3. Copy content from the corresponding `issue-XX-*.md` file
4. Set:
   - **Title**: From the issue file (e.g., "[SPRINT-1] Player Controller v0.1")
   - **Labels**: As specified in the file
   - **Milestone**: Sprint 1
   - **Assignees**: TBD
   - **Projects**: Add to Sprint 1 project board
5. Create the issue

**Shortcut**: You can use this bash script to create all issues at once (requires `gh` CLI):

```bash
# Example for creating issues (customize as needed)
for i in {01..09}; do
  issue_file="docs/sprint-1/issue-${i}-*.md"
  # Parse and create issues using gh CLI
  # (Manual creation recommended for first sprint)
done
```

### Step 5: Configure Project Automation (Optional)

The GitHub Actions workflow in `.github/workflows/project-automation.yml` provides basic automation placeholders. To enable full automation:

1. Go to repository Settings → Actions → General
2. Enable workflow permissions
3. Grant "Read and write permissions"
4. Update the workflow file with actual GitHub Project automation

## 📚 Key Documentation

| Document | Purpose | When to Use |
|----------|---------|-------------|
| [QUICK_REFERENCE.md](./sprint-1/QUICK_REFERENCE.md) | Quick daily reference | Every day |
| [SPRINT_PLAN.md](./sprint-1/SPRINT_PLAN.md) | Detailed sprint plan | Sprint planning |
| [PROJECT_BOARD.md](./sprint-1/PROJECT_BOARD.md) | Board setup & usage | Setup & training |
| [DEFINITION_OF_DONE.md](./DEFINITION_OF_DONE.md) | Quality standards | Before completing any work |
| [LABELS.md](./sprint-1/LABELS.md) | Label configuration | Setup & issue creation |
| [MILESTONES.md](./sprint-1/MILESTONES.md) | Milestone setup | Setup & tracking |

## ✅ Verification Checklist

After implementation, verify:

- [ ] All 4 labels created (area:client, area:backend, area:content, infra)
- [ ] Sprint 1 milestone created with due date Jan 29, 2026
- [ ] Sprint 1 project board created with 4 columns
- [ ] All 9 issues created from issue files
- [ ] All issues have correct labels applied
- [ ] All issues assigned to Sprint 1 milestone
- [ ] All issues added to Sprint 1 project board
- [ ] All issues start in "Backlog" column
- [ ] PR template is visible when creating PRs
- [ ] Issue templates are visible when creating issues
- [ ] Team has access to all documentation

## 🎯 Sprint 1 Overview

**Sprint Goal**: Deliver a playable MVP with core mechanics, first Devil Fruit power, and hub island prototype

**Timeline**: January 16 - 29, 2026 (2 weeks)

**Work Items**: 9 issues across 4 areas
- 3 client issues (Player Controller, Combat, Powers)
- 1 content issue (Hub Island)
- 2 backend issues (Scaffolding, Location Unlock)
- 3 infrastructure issues (CI/CD, Builds, DoD)

## 🔗 Quick Links

- **Project Board**: https://github.com/vishaljsoni/resistor-calculator/projects
- **Milestones**: https://github.com/vishaljsoni/resistor-calculator/milestones
- **Issues**: https://github.com/vishaljsoni/resistor-calculator/issues
- **Main README**: [/README.md](../README.md)

## 🆘 Troubleshooting

**Q: Issue templates not showing?**
- Check `.github/ISSUE_TEMPLATE/` exists and files are valid YAML/Markdown

**Q: PR template not applying?**
- Check `.github/pull_request_template.md` exists in the correct location

**Q: Labels not available?**
- Create them manually via Settings → Labels or use `gh` CLI

**Q: Can't add issues to project?**
- Ensure you have write access to the repository
- Check that the project exists and is accessible

## 📞 Support

For questions or issues with the project scaffolding:
1. Review this setup guide and linked documentation
2. Check the [QUICK_REFERENCE.md](./sprint-1/QUICK_REFERENCE.md)
3. Reach out to the Scrum Master or Tech Lead

## 🎉 You're All Set!

Once you've completed the setup steps above, your Sprint 1 project management infrastructure is ready. The team can now:

- Create and track issues
- Use the project board for sprint management
- Follow the Definition of Done for quality
- Collaborate effectively using GitHub's project tools

**Next Step**: Hold your Sprint 1 Planning meeting and start the sprint! 🚀

---

**Created**: January 16, 2026  
**Sprint**: Sprint 1 (Jan 16 - 29, 2026)  
**Project**: One Piece–inspired Game MVP
