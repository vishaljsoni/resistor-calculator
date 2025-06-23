# Resistor Calculator

A modern Angular 20 client and .NET Core 8 Web API server project to calculate the resistance of resistors. This application has been fully modernized for cross-platform compatibility, including macOS support. The app uses Electronic color code rings to calculate the resistance for resistors. A user can pick one or all four color bands for a resistor to check the calculated resistance.

For more details, please check this wiki link: [Electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code)

## 🚀 Modern Stack (2024)
- **Frontend**: Angular 20 with standalone components, Angular Material v20, CSS Grid
- **Backend**: .NET Core 8 Web API with built-in DI, minimal APIs
- **Testing**: xUnit (.NET), Karma/Jasmine (Angular)
- **Cross-Platform**: Windows, macOS, Linux support

## Legacy Stack (Original - 2018)
- **Frontend**: Angular 6, Angular Material v6, Flex Layout
- **Backend**: .NET Framework 4.6.1, ASP.NET Web API 2, OWIN
- **Testing**: MSTest (.NET), Karma/Jasmine (Angular)

## Projects Structure

### Modern (.NET Core 8 + Angular 20)
1. **Backend**: `ResistorRating.Api.Core`, `ResistorRating.Library.Core`
2. **Tests**: `ResistorRating.Test.Core` 
3. **Frontend**: `ResistorRatingCalculator.Web.New`
4. **Solution**: `ResistorRatingCalculator.Core.sln`

### Legacy (.NET Framework + Angular 6)
1. **Backend**: `ResistorRating.Api`, `ResistorRating.Library`
2. **Tests**: `ResistorRating.Test`
3. **Frontend**: `ResistorRatingCalculator.Web`
4. **Solution**: `ResistorRatingCalculator.sln`

## 🛠️ Prerequisites

- **.NET SDK 8.0+**: [Download .NET](https://dotnet.microsoft.com/download)
- **Node.js 20+**: [Download Node.js](https://nodejs.org/)
- **npm 10+**: Comes with Node.js

## ⚡ Quick Start (Modern Stack)

### 1. Clone the Repository
```bash
git clone https://github.com/vishaljsoni/resistor-calculator.git
cd resistor-calculator
```

### 2. Backend Setup (.NET Core 8)
```bash
# Build and test the backend
dotnet build ResistorRatingCalculator.Core.sln
dotnet test ResistorRating.Test.Core

# Run the API (will be available at http://localhost:5265)
dotnet run --project ResistorRating.Api.Core
```

### 3. Frontend Setup (Angular 20)
```bash
# Navigate to the new Angular app
cd ResistorRatingCalculator.Web.New

# Install dependencies
npm install

# Start the development server (will be available at http://localhost:4200)
npx ng serve
```

### 4. Access the Application
- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:5265
- **Swagger UI**: http://localhost:5265/swagger

## 🧪 API Endpoints

- `GET /api/Lookup` - Get all resistor color bands
- `GET /api/OhmValueCalculator/{bandA}/{bandD}/{bandB?}/{bandC?}` - Calculate resistance

Example:
```bash
# Get all color bands
curl http://localhost:5265/api/Lookup

# Calculate resistance for Brown-Black-Black-Brown (10Ω ±1%)
curl http://localhost:5265/api/OhmValueCalculator/BN/BN/BK/BK
```

## 📚 Legacy Setup (Original .NET Framework + Angular 6)

<details>
<summary>Click to expand legacy setup instructions</summary>

### Prerequisites (Legacy)
1. Visual Studio 2017 (.NET Framework 4.6.1)
2. Node.js v8.11.2, npm v6.0.0

### Server-side setup (Legacy)
1. Clone or download this repository to your local machine.
2. Make sure you have all the above-mentioned tools already set up on your local machine.
3. Open `ResistorRatingCalculator.sln` file, which should open Visual Studio.
4. Run all tests associated with the `ResistorRating.Test` project. They all should pass.
5. Get the `ResistorRating.Api` project's properties. Select a Web tab in the properties. Copy Project Url for future use. Default should be: `http://localhost:51487/`
6. If not, set `ResistorRating.Api` as the solution's start-up project and Start Debugging the solution (click F5).

### Client-side setup (Legacy)
1. Go to the downloaded directory for this repository.
2. Right-click on the `ResistorRating.Web` folder and select "Open with Visual Code".
3. Open the integrated terminal, run this command: `npm install`.
4. Navigate to this folder in Visual Code: `.\src\app\services\datacontext`.
5. Open `lookup-repo.service.ts` and `resistor-calc-repo.service.ts` files and change the `_restBaseApi` variable path to the local `ResistorRating.Api's` target path. For example, `http://localhost:51487/api`
6. Save both files and we are all set to run our client-side app too.
7. Go to the integrated terminal again and run this command: `ng serve -o`.

The above command will build an Angular app and open your browser and load the Resistor Rating Calculator app. You can test and change the app at your will.

</details>

## 🧪 Testing

### Backend Tests (.NET Core 8)
```bash
# Run all unit tests
dotnet test ResistorRating.Test.Core

# Run with detailed output
dotnet test ResistorRating.Test.Core --verbosity normal
```

### Frontend Tests (Angular 20)
```bash
cd ResistorRatingCalculator.Web.New

# Run unit tests
npx ng test

# Run e2e tests
npx ng e2e
```

## 🚀 Deployment

The modernized application supports deployment to:
- **Cloud Platforms**: Azure, AWS, Google Cloud
- **Containers**: Docker, Kubernetes
- **Operating Systems**: Windows, macOS, Linux

### Docker Deployment Example
```dockerfile
# Backend (.NET Core 8)
FROM mcr.microsoft.com/dotnet/aspnet:8.0
COPY . /app
WORKDIR /app
EXPOSE 80
ENTRYPOINT ["dotnet", "ResistorRating.Api.Core.dll"]

# Frontend (Angular 20)
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html
```

## 🔄 Migration Notes

This project has been successfully migrated from:
- **.NET Framework 4.6.1** → **.NET Core 8**
- **Angular 6** → **Angular 20**
- **ASP.NET Web API 2** → **Minimal APIs**
- **Autofac DI** → **Built-in DI**
- **MSTest** → **xUnit**
- **Angular Modules** → **Standalone Components**
- **Flex Layout** → **CSS Grid/Flexbox**

Both legacy and modern versions are maintained in this repository for comparison and migration reference.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
