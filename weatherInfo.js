import React from 'react';

const WeatherInfo = (props) => {
  const { data } = props;

  if (!data) {
    return null;
  }

  const { name, main, weather } = data;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <p>{`${main.temp}°C, ${weather[0].description}`}</p>
    </div>
  );
};

export default WeatherInfo;