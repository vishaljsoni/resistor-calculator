# GitHub Milestone Configuration

This document explains how to configure the Sprint 1 milestone in GitHub.

## Creating the Sprint 1 Milestone

### Via GitHub Web Interface

1. Navigate to your repository on GitHub
2. Click on "Issues" tab
3. Click on "Milestones" (next to Labels)
4. Click "New milestone" button
5. Fill in the following details:

**Milestone Configuration**:
- **Title**: `Sprint 1`
- **Due date**: `January 29, 2026`
- **Description**:
  ```
  Sprint 1 - One Piece Game MVP
  
  Sprint Goal: Deliver a playable MVP with core mechanics, first Devil Fruit power, and hub island prototype.
  
  Duration: 2 weeks (Jan 16 - Jan 29, 2026)
  
  Deliverables:
  - Player controller v0.1
  - Combat core system
  - Power framework + First Devil Fruit
  - Hub island graybox
  - Backend scaffolding (auth/profile/inventory)
  - Location unlock prototype
  - CI/CD + crash logging + feature flags
  - PC + Android build targets
  - Definition of Done checklist
  
  For details, see: /docs/sprint-1/SPRINT_PLAN.md
  ```

6. Click "Create milestone"

### Via GitHub CLI

Alternatively, use the GitHub CLI:

```bash
# Create Sprint 1 milestone
gh api repos/vishaljsoni/resistor-calculator/milestones \
  --method POST \
  --field title="Sprint 1" \
  --field state="open" \
  --field description="Sprint 1 - One Piece Game MVP. Duration: Jan 16-29, 2026. Sprint Goal: Deliver playable MVP with core mechanics. See /docs/sprint-1/SPRINT_PLAN.md for details." \
  --field due_on="2026-01-29T23:59:59Z"
```

## Assigning Issues to Milestone

Once the milestone is created, assign each Sprint 1 issue to it:

### Via Web Interface

1. Open an issue
2. In the right sidebar, find "Milestone"
3. Click the gear icon
4. Select "Sprint 1"
5. The issue is now associated with the milestone

### Via GitHub CLI

```bash
# Assign issue to Sprint 1 milestone (replace ISSUE_NUMBER)
gh issue edit ISSUE_NUMBER --milestone "Sprint 1"
```

### Bulk Assignment

If you have multiple issues to assign, you can use a script:

```bash
# Example: Assign issues 1-9 to Sprint 1
for i in {1..9}; do
  gh issue edit $i --milestone "Sprint 1"
done
```

## Milestone Tracking

### Viewing Milestone Progress

1. Go to Issues → Milestones
2. Click on "Sprint 1"
3. View:
   - Progress bar showing completion percentage
   - Open vs. closed issues
   - List of all issues in the milestone

### Milestone Metrics

GitHub automatically tracks:
- **Total issues**: All issues assigned to milestone
- **Open issues**: Not yet completed
- **Closed issues**: Completed and closed
- **Completion %**: (Closed / Total) × 100
- **Due date**: January 29, 2026
- **Days remaining**: Countdown to due date

## Using Milestones with Project Board

Milestones work alongside the project board:

1. **Milestone** = Time-boxed sprint (Sprint 1: Jan 16-29)
2. **Project Board** = Visual workflow (Backlog → In Progress → In Review → Done)
3. Together they provide:
   - Timeline tracking (milestone due date)
   - Status tracking (project board columns)

### Recommended View

Create a project board view filtered by milestone:
1. Open the Sprint 1 project
2. Add a filter: `milestone:"Sprint 1"`
3. This shows only Sprint 1 items on the board

## Milestone Best Practices

1. **Set Realistic Due Dates**: Sprint 1 ends Jan 29, 2026
2. **Don't Overload**: Only include work committed to in sprint planning
3. **Update Regularly**: Close issues as they're completed
4. **Review Progress**: Check milestone daily during standup
5. **Close on Time**: Close the milestone on the due date, move unfinished items to Sprint 2

## Milestone Burndown

Track burndown manually or with GitHub Insights:

1. **Day 1** (Jan 16): 9 issues open
2. **Day 5** (Jan 20): Target 50% complete (~4-5 issues closed)
3. **Day 10** (Jan 29): Target 100% complete (all 9 issues closed)

### Tracking Formula

```
Burndown Rate = (Issues Closed) / (Days Elapsed)
Target Rate = 9 issues / 10 days = 0.9 issues/day
```

## Closing the Milestone

At the end of Sprint 1:

1. Review all issues in the milestone
2. For completed issues: Ensure they're closed
3. For incomplete issues:
   - Move to Sprint 2 milestone (if continuing)
   - Return to backlog (if deprioritized)
   - Close as "won't fix" (if no longer relevant)
4. Close the Sprint 1 milestone
5. Review metrics for retrospective

### Milestone Retrospective Questions

- Did we complete all 9 issues?
- What was our actual vs. target burndown?
- Were there any blockers that delayed completion?
- Was the scope appropriate for 2 weeks?
- How can we improve estimation for Sprint 2?

## Future Milestones

After Sprint 1, create subsequent milestones:

- **Sprint 2**: Feb 2 - Feb 15, 2026
- **Sprint 3**: Feb 16 - Mar 1, 2026
- **Beta Release**: Target date TBD
- **v1.0 Launch**: Target date TBD

## Troubleshooting

### Issue not showing in milestone
- Verify the issue is assigned to "Sprint 1" milestone
- Check if issue has been closed (closed issues may be hidden by default)
- Refresh the page

### Can't create milestone
- Ensure you have write access to the repository
- Check that a milestone with the same name doesn't already exist

### Milestone due date passed
- You can still work on issues in the milestone
- GitHub will show "Past due" indicator
- Close the milestone and move remaining items to next sprint

## Additional Resources

- [GitHub Milestones Documentation](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones)
- [Sprint Planning Best Practices](https://www.scrum.org/resources/what-is-sprint-planning)
- [Agile Burndown Charts](https://www.atlassian.com/agile/tutorials/burndown-charts)
