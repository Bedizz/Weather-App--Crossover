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
      props.updateSearch(data);
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
    </>
  );
};

export default SearchBar;
