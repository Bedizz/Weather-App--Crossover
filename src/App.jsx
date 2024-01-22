import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const updateSearch = (searchInput) => {
    console.log(searchInput);
  };

  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <SearchBar updateSearch={updateSearch} />
      </div>
    </>
  );
}

export default App;
