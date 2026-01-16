# Sprint 1 Quick Reference Guide

## 🚀 Quick Links

- **Project Board**: [GitHub Projects → Sprint 1](https://github.com/vishaljsoni/resistor-calculator/projects)
- **Milestone**: [Issues → Milestones → Sprint 1](https://github.com/vishaljsoni/resistor-calculator/milestones)
- **Issues**: [Create New Issue](https://github.com/vishaljsoni/resistor-calculator/issues/new/choose)
- **Sprint Plan**: [SPRINT_PLAN.md](./SPRINT_PLAN.md)

## 📅 Sprint Timeline

| Event | Date | Notes |
|-------|------|-------|
| Sprint Start | Jan 16, 2026 | Sprint Planning meeting |
| Mid-Sprint Check | Jan 22, 2026 | Review progress, adjust if needed |
| Sprint End | Jan 29, 2026 | Sprint Review + Retrospective |

## 📋 Sprint 1 Work Items Checklist

- [ ] **Issue 1**: Player Controller v0.1 (`area:client`)
- [ ] **Issue 2**: Combat Core (`area:client`)
- [ ] **Issue 3**: Power Framework + Fruit #1 (`area:client`, `area:content`)
- [ ] **Issue 4**: Hub Island Graybox (`area:content`)
- [ ] **Issue 5**: Backend Scaffolding (`area:backend`)
- [ ] **Issue 6**: Location Unlock Prototype (`area:client`, `area:backend`)
- [ ] **Issue 7**: CI/Crash Logging/Feature Flags (`infra`)
- [ ] **Issue 8**: Playable Build Targets (`infra`)
- [ ] **Issue 9**: Definition of Done Checklist (`infra`)

## 🏷️ Labels Quick Reference

| Label | Use For |
|-------|---------|
| `area:client` | Unity game code, UI, player mechanics |
| `area:backend` | Server APIs, database, authentication |
| `area:content` | Levels, assets, game content |
| `infra` | CI/CD, builds, tooling |

## 📊 Project Board Columns

1. **Backlog** → Sprint 1 items not yet started
2. **In Progress** → Currently being worked on (WIP limit: 2-3/person)
3. **In Review** → Code review or QA testing
4. **Done** → Completed and closed

## ✅ Definition of Done

Before moving to "Done", ensure:
- [ ] Code complete and reviewed
- [ ] Tests passing (unit + integration)
- [ ] Documentation updated
- [ ] Deployed to dev
- [ ] QA approved
- [ ] No critical bugs

## 🔄 Daily Workflow

### Morning
1. Check "In Progress" for your items
2. Review any PRs needing your review
3. Update standup doc/chat

### During Day
4. Move items as status changes
5. Comment on blockers immediately
6. Link PRs to issues

### Evening
7. Update issue progress
8. Move completed items to "In Review"
9. Note tomorrow's focus

## 📝 Creating an Issue

1. Go to Issues → New Issue
2. Select "Sprint Task" template
3. Copy from `docs/sprint-1/issue-XX-*.md`
4. Set:
   - **Milestone**: Sprint 1
   - **Labels**: Per issue file
   - **Assignee**: Your name
   - **Project**: Sprint 1 board
5. Create issue

## 🔧 Common Commands

### GitHub CLI

```bash
# View Sprint 1 issues
gh issue list --milestone "Sprint 1"

# Create issue from template
gh issue create --template sprint-task.md

# Assign issue to yourself
gh issue edit 123 --add-assignee @me

# Add label
gh issue edit 123 --add-label "area:client"

# Link to milestone
gh issue edit 123 --milestone "Sprint 1"
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/player-controller

# Commit changes
git add .
git commit -m "feat: implement player movement"

# Push and create PR
git push -u origin feature/player-controller
gh pr create --fill

# Link PR to issue
gh pr edit --add-label "area:client"
```

## 🎯 Sprint Goal

> Deliver a playable MVP with core mechanics, first Devil Fruit power, and hub island prototype

## 📈 Success Metrics

- ✅ All 9 issues completed
- ✅ MVP playable on PC + Android
- ✅ CI/CD operational
- ✅ No critical bugs

## 🆘 Getting Help

| Problem | Solution |
|---------|----------|
| Blocked on issue | Tag issue with `blocked`, notify team |
| Need code review | Request review in PR, ping reviewer |
| Build failing | Check CI logs, ask DevOps |
| Unclear requirements | Comment on issue, ask Product Owner |

## 📞 Team Contacts

- **Scrum Master**: TBD
- **Product Owner**: TBD
- **Tech Lead**: TBD
- **DevOps**: TBD

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [README.md](./README.md) | Sprint 1 overview + issue list |
| [SPRINT_PLAN.md](./SPRINT_PLAN.md) | Detailed sprint planning |
| [PROJECT_BOARD.md](./PROJECT_BOARD.md) | Board setup and usage |
| [LABELS.md](./LABELS.md) | Label configuration |
| [MILESTONES.md](./MILESTONES.md) | Milestone setup |
| Issue Files | Individual issue details |

## 🔐 Access Requirements

To work on Sprint 1, ensure you have:
- [ ] Repository write access
- [ ] Added to Sprint 1 project
- [ ] Access to dev environment
- [ ] CI/CD credentials (if needed)
- [ ] Discord/Slack team channel

## ⚡ Pro Tips

1. **Update Often**: Move cards as soon as status changes
2. **Small PRs**: Easier to review, faster to merge
3. **Link Everything**: PRs to issues, issues to project
4. **Comment Liberally**: Over-communicate progress/blockers
5. **WIP Limits**: Don't take on too much at once
6. **Ask Early**: Don't wait until standup to raise blockers
7. **Review Others**: Help team by reviewing PRs promptly
8. **Test Locally**: Before pushing, test your changes
9. **Follow DoD**: Don't skip quality standards
10. **Have Fun**: We're making a game! 🎮

## 🎮 Sprint 1 Focus Areas

### Week 1 (Jan 16-22)
- Player Controller
- Backend Scaffolding
- CI/CD Setup
- Hub Island basics

### Week 2 (Jan 23-29)
- Combat Core
- Power Framework + Fruit #1
- Location Unlock
- Build targets + Polish

---

**Need more detail?** Check the full [Sprint Plan](./SPRINT_PLAN.md) or ask the team! 🚀
