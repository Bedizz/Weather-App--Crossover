import React, { useEffect, useState } from "react";
import WeatherDisplay from "../components/WeatherDisplay";


const currentLocation = (props) => {
  const [catchingLocation, setcatchingLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Setting a loading state to await results of async function
  const weatherData = props.weatherData
  const fetchingWeather = async () => {
    try {
      const res = await fetch(
        
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_APP_API_KEY
        }`
      );
      const data = await res.json();
      setcatchingLocation(data);
      

      try {
        const CountryWeather = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API
          }&q=${data.ip}&days=3&aqi=yes&alerts=no`
        );
        const CountryWeatherData = await CountryWeather.json();
        setcatchedLocationsWeather(CountryWeatherData);
        
      } catch (error) {
        console.log("The weather API couldnt fetch ", error);
      }
    } catch (error) {
      console.log("The GEO API couldnt fetch ", error);
    } finally {
      setIsLoading(false); // Setting the loading state to false when the async function has completed
    }
  };

  console.log(weatherData);

  useEffect(() => {
    fetchingWeather();
  }, []);


  // Added a display for when the page is loading and the async function has not completed
  if (isLoading) {
    return <div>Loading...</div>;
  };

  // Creating variables from the fetched objects
  let userLocation = weatherData.location.name;
  let locationCurrentTemp = weatherData.current.temp_c;

  return (
    <div className='weatherDisplayText'>
      <h1 className='currentLocationHeader'>Current Location: {userLocation} </h1>

      <div className='weatherCardContainer'>
        {/* Rendering the Component to display the weather, passing the fetched Location and Temperature as props */}
        {weatherData.forecast.forecastday.map((day) => (
                <WeatherDisplay location={userLocation} temp={locationCurrentTemp} key={day.date} day={day}/>

          ))}
      </div>
    </div>
  );
};

export default currentLocation;
