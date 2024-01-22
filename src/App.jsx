import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentLocation from "./views/currentLocation";

function App() {
  const updateSearch = (searchInput) => {
    console.log(searchInput);
  };

  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <SearchBar updateSearch={updateSearch} />
        <CurrentLocation /> 
      </div>

    </>
  );
}

export default App;
