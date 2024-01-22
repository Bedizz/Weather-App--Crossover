import React, { useState, useEffect } from "react";
import './WeatherDisplay.css';

const WeatherDisplay = (props) => {
  const weather = props.weather;

  const userLocation = props.location;
  const locationTemp = props.temp;
  const day = props.day;
  console.log(day);

  return (
        
        <div className="weatherCard">

            <h1>{props.day.date}</h1>
            <img src={day.day.condition.icon} alt="weather icon" />
            <h1>{day.day.condition.text}</h1>

            <div className="tempDiv">
                <div className="tableValueRow">
                    <p>Max:</p>
                    <p>{day.day.maxtemp_c}°C</p>
                </div>
                <div className="tableValueRow">
                    <p>Min:</p>
                    <p>{day.day.mintemp_c}°C</p>
                </div>
                <div className="tableValueRow">
                    <p>Avg:</p>
                    <p>{day.day.avgtemp_c}°C</p>
                </div>
            </div>

            <div className="rainDiv">
                <div className="tableValueRow">
                    <p>Rain Chance : </p>
                    <p>{day.day.daily_chance_of_rain}</p>
                </div>
                <div className="tableValueRow">
                    <p>Rain Chance : </p>
                    <p>{day.day.daily_chance_of_snow}</p>
                </div>
            </div>
        </div>
  );
};

export default WeatherDisplay;
