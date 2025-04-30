# Resistor Calculator

A web application for calculating resistor values based on color bands.

## Quick Start with Docker

### Prerequisites
- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
```bash
git clone https://github.com/vishaljsoni/resistor-calculator.git
cd resistor-calculator
```

2. Start the application using Docker Compose:
```bash
docker compose up --build
```

3. Access the application:
- Frontend: http://localhost
- API: http://localhost:5001/api

### Development

The application consists of two main parts:
- Backend API (.NET 8.0)
- Frontend (Angular 17)

Both services are containerized and can be run together using Docker Compose.

### Architecture

- The frontend is served by Nginx and communicates with the backend API
- The backend API runs on .NET 8.0 and exposes endpoints on port 5001
- Nginx proxies API requests to the backend service automatically
- Both services run in an isolated network created by Docker Compose

### Stopping the Application

To stop the application:
```bash
docker compose down
```

## Building Without Docker

If you prefer to run the application without Docker:

### Backend
1. Install .NET 8.0 SDK
2. Navigate to the API directory:
```bash
cd ResistorRating.Api
dotnet run
```

### Frontend
1. Install Node.js 20.x
2. Navigate to the web directory:
```bash
cd ResistorRatingCalculator.Web
npm install
ng serve
```
