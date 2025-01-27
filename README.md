### Weather Dashboard App
The project provides users with an interactive platform to view current weather conditions, forecasts, and other relevant data for different locations. It's built with web technologies, including React, TypeScript, and Jest for testing, providing a smooth user experience and seamless integration with weather data APIs.

### Features

- Current Weather: Displays real-time weather data including temperature, humidity, and weather conditions for any city.
- Search Functionality: Search for weather data by city name.

### Tech Stack
- Frontend: React, TypeScript, Apollo Client
- Backend: GraphQL Server, NodeJS, Express, Axios, Apollo Client
- Weather API: OpenWeatherMap API
- Testing: Jest

# Weather API Service (Backend)

A backend service that fetches weather data from the OpenWeather API and returns the formatted response to the client. The service uses `axios` for API requests and is designed with functional programming patterns and effective use of design patterns.

## Features

- Fetch weather data for any given city.
- Transform API response into a proper format.
- Handle errors with standardized error responses.
- Use design patterns to structure the code, including Singleton, and Service patterns.

## Backend Setup

To get the project running locally, follow the steps below.

### 1. Navigate to the `backend/` directory.

### 2. Install Dependencies

npm install

### 3. Run the application locally

npm start

### 4. Running Tests

npm test


### Weather Dashboard - Frontend

## Overview

Weather dashboard application built using **React**. It allows users to search for cities and view current weather conditions, including temperature, humidity, and weather description. The app fetches real-time data from a weather API and provides a user interface for easy city search and result display.

## Features

- **City Search**: Users can search for cities by name.
- **Weather Display**: Displays weather data for the searched city including temperature, humidity, and description.
- **Error Handling**: Displays error messages if a city cannot be found or if the API fails.

## Frontend Setup

To get the project running locally, follow the steps below.


### 1. Navigate to the `frontend/` directory.

### 2. Install Dependencies

npm install

### 3. Run the application locally

npm start
