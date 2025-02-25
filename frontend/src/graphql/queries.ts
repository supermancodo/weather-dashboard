import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query GetWeather($city: String!) {
    getWeather(city: $city) {
      city
      temperature
      feels_like
      description
      humidity
    }
  }
`;