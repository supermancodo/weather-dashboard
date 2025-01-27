import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Weather.css';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import { GET_WEATHER } from '../../graphql/queries';

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [getWeatherData, { data, loading: queryLoading, error: queryError }] = useLazyQuery(GET_WEATHER);
  console.log('DATA', data);

  const handleInputChange = (city: string) => {
    setCity(city);
  };

  const handleSearchSubmit = () => {
    if (!city) {
      setError('Please enter a city.');
      return;
    }

    setError('');
    getWeatherData({ variables: { city } });
  };

  return (
    <div className="weather-container">
      <div className="weather-content">
        <h1 className='weather-heading'> Search for Weather in Your Favorite Cities</h1>
        <SearchBar city={city} onChange={handleInputChange} onSearch={handleSearchSubmit} />
        {queryLoading && <p>Loading...</p>}
        {(queryError || error) && (
          <div className='error-div'>
            {queryError && <p className="error">{queryError.message}</p>}
            {error && <p className="error">{error}</p>}
          </div>
        )}
        {data && data.getWeather && (
          <WeatherDetails
            city={data.getWeather.city}
            temperature={data.getWeather.temperature}
            description={data.getWeather.description}
            humidity={data.getWeather.humidity}
            feelsLike={data.getWeather.feels_like}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;