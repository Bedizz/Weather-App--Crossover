import React, { useEffect, useState } from "react";


const currentLocation = () => {
  const [catchingLocation, setcatchingLocation] = useState({});
  const [catchedLocationsWeather, setcatchedLocationsWeather] = useState({});
  const fetchingWeather = async () => {
    try {
      const res = await fetch(
        
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_APP_API_KEY
        }`
      );
      const data = await res.json();
      setcatchingLocation(data);
      console.log(data);

      try {
        const CountryWeather = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API
          }&q=${data.location.city}&days=3&aqi=yes&alerts=no`
        );
        const CountryWeatherData = await CountryWeather.json();
        setcatchedLocationsWeather(CountryWeatherData);
        console.log(CountryWeatherData);
      } catch (error) {
        console.log("The weather API couldnt fetch ", error);
      }
    } catch (error) {
      console.log("The GEO API couldnt fetch ", error);
    } finally {
        console.log("The GEO API and Weather API fetched successfully");
        }
  };

  useEffect(() => {
    fetchingWeather();
  }, []);

  return (
    <div>
      <h1>Current Location:  </h1>
    </div>
  );
};

export default currentLocation;
