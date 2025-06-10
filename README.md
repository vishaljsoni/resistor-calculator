# Resistor Calculator
A Simple Angular 18 client and ASP.NET Core 8 server project to calculate the resistance of resistors. This simple app uses Electronic color code rings to calculate the resistance for the resistors. A user can pick one or all four color bands for a resistor to check the calculated resistance.

This application has been fully modernized to work cross-platform on Windows, macOS, and Linux.

For more details, please check this wiki link: [Electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code)

## Used Tools and Environments
1. .NET 8 SDK, Visual Studio Code, or any compatible IDE
2. NuGet Package manager, npm
3. .NET 8, Node v20+, npm v10+

## Projects
1. Server side projects: `ResistorRating.Api` (ASP.NET Core), `ResistorRating.Library` (.NET 8 Class Library)
2. Unit Test Project: `ResistorRating.Test` (xUnit)
3. Frontend Project/Folder: `ResistorRatingCalculator.Web` (Angular 18)

## How to locally set up the project

### Prerequisites
- .NET 8 SDK installed ([Download here](https://dotnet.microsoft.com/download/dotnet/8.0))
- Node.js 20+ installed ([Download here](https://nodejs.org/))
- Angular CLI installed globally: `npm install -g @angular/cli`

### Server-side setup
1. Clone or download this repository to your local machine.
2. Navigate to the project root directory.
3. Run tests to ensure everything works:
   ```bash
   dotnet test
   ```
4. Start the API server:
   ```bash
   cd ResistorRating.Api
   dotnet run
   ```
   The API will be available at `http://localhost:5000`

### Client-side setup
1. Navigate to the Angular project directory:
   ```bash
   cd ResistorRatingCalculator.Web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200`

The Angular app is already configured to connect to the local .NET Core API at `http://localhost:5000/api`.

## Development Commands

### Backend (.NET Core)
- Run tests: `dotnet test`
- Build: `dotnet build`
- Run API: `cd ResistorRating.Api && dotnet run`

### Frontend (Angular)
- Install dependencies: `npm install`
- Serve development: `ng serve`
- Build for production: `ng build`
- Run tests: `ng test`

## Cross-Platform Compatibility
This application now runs on:
- ✅ Windows
- ✅ macOS
- ✅ Linux

## Architecture
- **Backend**: ASP.NET Core 8 Web API with dependency injection
- **Frontend**: Angular 18 with standalone components
- **Testing**: xUnit for backend, Jasmine/Karma for frontend
- **Build System**: .NET CLI and Angular CLI
