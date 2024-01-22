import React, { useEffect } from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState(""); // To be used for auto-complete
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Setting a loading state to await results of async function

  const fetchingWeather = async () => {
    try {
      const result = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_WEATHER_API
        }&q=${searchText}&days=4&aqi=yes&alerts=no`
      );
      const data = await result.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log("The weather API couldnt fetch ", error);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      //   props.updateSearch(e.target.value);
      fetchingWeather();
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <input
          aria-label="search bar"
          type="text"
          className="bg-neutral-300 mt-20 p-2 w-4/5 sm:w-80 h-10 rounded focus:outline-none text-center"
          placeholder="Search..."
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
      </div>
      <div>
        {weather.current && (
          <div className="weather-container">
            {weather.forecast.forecastday.map((day) => (
              <div className="weather-card" key={day.date}>
                <h2 className="date"> {day.date}</h2>
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                />
                <hr />
                <p className="condition">{day.day.condition.text}</p>
                <div className="weather">
                  <hr />
                  <p>Max: {day.day.maxtemp_c}°C</p>
                  <p>Min: {day.day.mintemp_c}°C</p>
                  <p>Avg: {day.day.avgtemp_c}°C</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
