import React from 'react';
import './WeatherDetails.css';
import { capitalizeWords } from '../../utils/utils';

interface WeatherDetailsProps {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  feelsLike: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  city,
  temperature,
  description,
  humidity,
  feelsLike,
}) => {

  const capitalizedDescription = capitalizeWords(description);

  return (
    <div className="weather-card">
      <h2 className='city-name'>{city}</h2>
      <div className='border'></div>
      <div className="weather-details">
        <img
          src={'/images/weather-icon.png'}
          alt={description}
          className="weather-icon"
        />
        <div className="additional-info">
          <h1 className="temperature">{temperature}°C</h1>
          <p className='description'>{capitalizedDescription}</p>
        </div>
        <div className='border2'></div>
        <div className='weather-info'>
          <p>Feels {feelsLike}°C</p>
          <div className="vertical-border"></div>
          <p>{humidity}% Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
