import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <SearchBar />
        <WeatherDisplay />
      </div>
    </>
  );
}

export default App;
