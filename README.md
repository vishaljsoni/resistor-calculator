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
