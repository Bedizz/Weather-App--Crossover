import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState(null); // To be used for auto-complete

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      props.updateSearch(e.target.value);
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        className="bg-neutral-300 mt-20 p-2 w-4/5 sm:w-80 h-10 rounded focus:outline-none text-center"
        placeholder="Search..."
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default SearchBar;
