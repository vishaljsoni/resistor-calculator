# Resistor Calculator
A Simple Angular 6 client and ASP.Net Web Api 2 server project to calculate the resistance of resistors. This simple app uses Electric color code rings to calculate the resistance for the resistors. A user can pick one or all four color bands for a resistor to check the calculated resistance.

For more details, please check this wiki link: [Electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code)

## Used Tools and Environments
1. Visual Studio 2017 (.NET fw 4.6.1), Visual Code
2. Nuget Package manager, npm
3. .NET 4.6.1, Node v8.11.2, npm v6.0.0

## Projects
1. Server side projects: `ResistorRating.Api`, `ResistorRating.Library`
2. Unit Test Project: `ResistorRating.Test`
3. Frontend Project/Folder: `ResistorRating.Web`

A live demo of the application is available [here](http://resistorcalc-web.azurewebsites.net/index.html)

## How to locally set up the project

### Server-side setup
1. Clone or download this repository to your local machine.
2. Make sure you have all the above-mentioned tools already set up on your local machine.
3. Open `ResistorRatingCalculator.sln` file, which should open Visual Studio.
4. Run all tests associated with the `ResistorRating.Test` project. They all should pass.
5. Get the `ResistorRating.Api` project's properties. Select a Web tab in the properties. Copy Project Url for future use. Default should be: `http://localhost:51487/`
6. If not, set `ResistorRating.Api` as the solution's start-up project and Start Debugging the solution (click F5).

### Client-side setup
1. Go to the downloaded directory for this repository.
2. Right-click on the `ResistorRating.Web` folder and select "Open with Visual Code".
3. Open the integrated terminal, run this command: `npm install`.
4. Navigate to this folder in Visual Code: `.\src\app\services\datacontext`.
5. Open `lookup-repo.service.ts` and `resistor-calc-repo.service.ts` files and change the `_restBaseApi` variable path to the local `ResistorRating.Api's` target path. For example, `http://localhost:51487/api`
6. Save both files and we are all set to run our client-side app too.
7. Go to the integrated terminal again and run this command: `ng serve -o`.

The above command will build an Angular app and open your browser and load the Resistor Rating Calculator app. You can test and change the app at your will.

---

## Sprint 1 - One Piece Game MVP Project

This repository also includes project planning for a One Piece–inspired game MVP development effort.

### Sprint 1 Timeline
- **Start Date**: January 16, 2026
- **End Date**: January 29, 2026
- **Duration**: 2 weeks

### Using the Project Board

Sprint 1 work is tracked using a GitHub Project board with the following columns:
- **Backlog**: Planned work not yet started
- **In Progress**: Currently being worked on
- **In Review**: Under code review or QA testing
- **Done**: Completed and closed

#### Quick Start
1. View the [Sprint 1 Project Board](https://github.com/vishaljsoni/resistor-calculator/projects) (navigate to Projects tab)
2. Check the [Sprint 1 Documentation](./docs/sprint-1/README.md) for detailed issue descriptions
3. Review the [Project Board Guide](./docs/sprint-1/PROJECT_BOARD.md) for usage instructions
4. See [Labels Guide](./docs/sprint-1/LABELS.md) for label definitions

#### Daily Workflow
- **Start of day**: Check your assigned issues in "In Progress"
- **During work**: Keep issue status updated, link PRs to issues
- **End of day**: Move completed items to "In Review", note blockers

#### Sprint Scope
Sprint 1 includes 9 core work items:
1. Player Controller v0.1 (`area:client`)
2. Combat Core (`area:client`)
3. Power Framework + Fruit #1 (`area:client`, `area:content`)
4. Hub Island Graybox (`area:content`)
5. Backend Scaffolding - Auth/Profile/Inventory (`area:backend`)
6. Location Unlock Prototype (`area:client`, `area:backend`)
7. CI/Crash Logging/Feature Flags (`infra`)
8. Playable Build Targets - PC + Android (`infra`)
9. Definition of Done Checklist (`infra`)

For complete details on each work item, see the [Sprint 1 Issues Directory](./docs/sprint-1/).

### Creating Issues from Sprint 1 Plan

To create the Sprint 1 issues in GitHub:

1. Go to the [Issues](https://github.com/vishaljsoni/resistor-calculator/issues) page
2. Click "New Issue"
3. Select the "Sprint Task" template
4. Copy content from the corresponding file in `docs/sprint-1/`
5. Apply the specified labels and milestone
6. Add to the Sprint 1 project board

### Labels

The project uses the following area labels:
- `area:client` - Client-side game code and features
- `area:backend` - Backend services, APIs, and infrastructure
- `area:content` - Game content, assets, and level design
- `infra` - Infrastructure, CI/CD, and development tools

See [LABELS.md](./docs/sprint-1/LABELS.md) for the complete label configuration guide.

### Support

For questions about Sprint 1 planning:
- Review the [Project Board documentation](./docs/sprint-1/PROJECT_BOARD.md)
- Check individual issue files in [docs/sprint-1/](./docs/sprint-1/)
- Reach out to the Scrum Master or technical lead
