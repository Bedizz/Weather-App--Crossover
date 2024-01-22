import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {

    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const userLocation = "Cairo";

    useEffect(() => {
        const fetchForecast =  async () => {

            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=296b9711a10f41e19c895608242201&q=${userLocation}&aqi=no`);
                const weather = await response.json();

                setWeather(weather);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            };
        };

    fetchForecast();

    }, [userLocation]);

    
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1 className='displayText'>The temperature in {weather.location.name} today is {weather.current.temp_c}°C</h1>
        </div>
    );

};

export default WeatherDisplay;