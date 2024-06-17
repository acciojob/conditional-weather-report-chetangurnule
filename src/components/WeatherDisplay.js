import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p>
        Temperature:{' '}
        <span style={{ color: temperature ? "red" : "blue" }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
