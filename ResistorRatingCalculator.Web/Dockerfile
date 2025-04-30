FROM node:20 as build
WORKDIR /app

# Copy package files
COPY ResistorRatingCalculator.Web/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY ResistorRatingCalculator.Web/ .

# Build the application
RUN npm run build

# Serve the application using nginx
FROM nginx:alpine
COPY --from=build /app/dist/resistor-rating-calculator-web /usr/share/nginx/html
COPY ResistorRatingCalculator.Web/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80