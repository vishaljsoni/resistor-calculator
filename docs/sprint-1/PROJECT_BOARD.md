# Sprint 1 Project Board Setup

This document provides instructions for setting up and using the GitHub Project (beta) board for Sprint 1 of the One Piece–inspired game MVP.

## Project Board Configuration

### Creating the Project Board

1. Navigate to the repository on GitHub
2. Click on the "Projects" tab
3. Click "New project"
4. Select "Board" template
5. Name it "Sprint 1 - One Piece Game MVP"
6. Click "Create"

### Board Columns

Configure the following columns (in order):

1. **Backlog**
   - Description: Items planned for Sprint 1 but not yet started
   - Automation: None

2. **In Progress**
   - Description: Items currently being worked on
   - Automation: Auto-move issues when assigned

3. **In Review**
   - Description: Items under code review or QA testing
   - Automation: Auto-move when PR is opened

4. **Done**
   - Description: Completed items
   - Automation: Auto-move when issue is closed

### Sprint Configuration

- **Sprint Name**: Sprint 1
- **Sprint Duration**: 2 weeks
- **Start Date**: January 16, 2026
- **End Date**: January 29, 2026
- **Sprint Goal**: Deliver a playable MVP with core mechanics, first Devil Fruit power, and hub island prototype

### Adding Issues to the Project

For each issue in the `docs/sprint-1/` directory:

1. Create the GitHub issue using the Sprint Task template
2. Copy the content from the corresponding markdown file
3. Apply the following:
   - **Milestone**: Sprint 1
   - **Labels**: As specified in the issue file
   - **Assignees**: TBD (assign during sprint planning)
4. In the issue sidebar, click "Projects"
5. Select "Sprint 1 - One Piece Game MVP"
6. Issue will appear in the "Backlog" column by default

### Project Views

Create the following views for better project management:

#### View 1: By Area
- Group by: Labels (area:client, area:backend, area:content, infra)
- Sort by: Priority

#### View 2: By Assignee
- Group by: Assignee
- Sort by: Status

#### View 3: Sprint Timeline
- Layout: Roadmap view
- Group by: Milestone
- Show: Sprint 1 dates (Jan 16-29)

## Using the Project Board

### Daily Workflow

1. **Start of Day**
   - Check "In Progress" column for your assigned issues
   - Move completed items to "In Review" if PR is ready
   - Pick new items from "Backlog" if capacity available

2. **During Development**
   - Keep issue status updated
   - Add comments on blockers or questions
   - Link PRs to issues

3. **End of Day**
   - Update issue progress in comments
   - Move completed code to "In Review"
   - Note any blockers for standup

### Moving Issues Between Columns

- **Backlog → In Progress**: When you start working on an issue
- **In Progress → In Review**: When you open a PR or request QA
- **In Review → In Progress**: If changes are requested
- **In Review → Done**: When PR is merged and issue is closed

### Sprint Ceremonies

#### Sprint Planning (Start of Sprint)
- Review all backlog items
- Assign issues to team members
- Estimate effort/story points
- Commit to sprint scope

#### Daily Standup
- Review board status
- Discuss blockers (items stuck in a column)
- Coordinate dependencies

#### Sprint Review (End of Sprint)
- Demo completed items from "Done" column
- Gather stakeholder feedback
- Update product backlog

#### Sprint Retrospective
- Discuss what went well
- Identify improvement areas
- Create action items for next sprint

## Best Practices

1. **One Issue, One Task**: Keep issues focused on a single deliverable
2. **Update Regularly**: Move cards as soon as status changes
3. **Link PRs**: Always link pull requests to issues
4. **Use Labels**: Properly label issues for filtering and reporting
5. **Comment Often**: Keep stakeholders informed through issue comments
6. **Definition of Done**: Ensure all DoD criteria are met before moving to Done
7. **WIP Limits**: Limit "In Progress" items to maintain focus (suggest 2-3 per person)

## Reporting and Metrics

### Sprint Burndown
- Track remaining issues in Backlog and In Progress
- Aim for steady progress toward 0 by sprint end

### Velocity
- Count completed issues/story points
- Use to inform future sprint planning

### Blocked Items
- Monitor items with "blocked" label
- Address blockers in daily standup

## Troubleshooting

### Issue not showing in project
- Ensure the issue is added to the project via the sidebar
- Check project filters aren't hiding it

### Can't move issue between columns
- Verify you have write access to the repository
- Check if issue is linked to another project

### Automation not working
- Review project automation settings
- Ensure GitHub Actions have necessary permissions

## Additional Resources

- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [Agile Best Practices](https://www.atlassian.com/agile/project-management)
- [Sprint Planning Guide](https://www.scrum.org/resources/what-is-sprint-planning)

## Support

For questions about the project board setup or usage, please:
- Check this documentation first
- Ask in the team Discord/Slack channel
- Tag the Scrum Master in an issue comment
