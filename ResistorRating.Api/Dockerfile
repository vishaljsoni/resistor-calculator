FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and project files
COPY ["ResistorRating.Api/ResistorRating.Api.csproj", "ResistorRating.Api/"]
COPY ["ResistorRating.Library/ResistorRating.Library.csproj", "ResistorRating.Library/"]
COPY ["ResistorRating.Test/ResistorRating.Test.csproj", "ResistorRating.Test/"]

# Restore NuGet packages
RUN dotnet restore "ResistorRating.Api/ResistorRating.Api.csproj"

# Copy the rest of the code
COPY . .

# Build the application
RUN dotnet build "ResistorRating.Api/ResistorRating.Api.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "ResistorRating.Api/ResistorRating.Api.csproj" -c Release -o /app/publish

# Final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 5001
ENTRYPOINT ["dotnet", "ResistorRating.Api.dll"]