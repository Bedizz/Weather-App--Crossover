import React, { useState, useEffect } from 'react';

const WeatherDisplay = (props) => {

    const weather = props.weather;

    const userLocation = props.location;
    const locationTemp = props.temp;
    const day = props.day;
    console.log(day);

    
    return (
        <div>
            <h1>Today is {props.day.date}</h1>
            <h1>Today's weather is {day.day.condition.text}</h1>
            <img src={day.day.condition.icon} alt="" />
        
            <h1>The temperature today is {locationTemp}°C</h1>
        </div>
    );

};

export default WeatherDisplay;