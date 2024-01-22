import React, { useState, useEffect } from "react";

const WeatherDisplay = (props) => {
  const weather = props.weather;

  const userLocation = props.location;
  const locationTemp = props.temp;
  const day = props.day;
  

  return (
    <div>
      <h1>Today is {props.day.date}</h1>
      <h1>Today's weather is {day.day.condition.text}</h1>
      <img src={day.day.condition.icon} alt="" />

      <h1>The temperature today is {locationTemp}°C</h1>
      <div>
        <p>Max: {day.day.maxtemp_c}°C</p>
        <p>Min: {day.day.mintemp_c}°C</p>
        <p>Avg: {day.day.avgtemp_c}°C</p>
      </div>
      <div>
        <p>Rain Chance : {day.day.daily_chance_of_rain}</p>
        <p>Rain Chance : {day.day.daily_chance_of_snow}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
