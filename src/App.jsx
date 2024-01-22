import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import CurrentLocation from "./views/currentLocation";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <>
      <div className="bg-neutral-900 min-h-screen">
        <SearchBar updateSearch={setSearchResults} />
        {searchResults && <CurrentLocation weatherData={searchResults} />}      
        </div>

    </>
  );
}

export default App;
