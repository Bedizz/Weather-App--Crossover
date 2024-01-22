import React, { useState, useEffect } from 'react';

const WeatherDisplay = (props) => {

    const weather = props.weather;

    const userLocation = props.location;
    const locationTemp = props.temp;

    
    return (
        <div>
            <h1>The temperature in {userLocation} today is {locationTemp}°C</h1>
        </div>
    );

};

export default WeatherDisplay;