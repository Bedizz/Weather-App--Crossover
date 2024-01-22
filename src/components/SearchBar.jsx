import React from "react";

const SearchBar = (updateSearch) => {
  const handleInput = (e) => {
    this.props.updateSearch(e.target.value);
  };

  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        className="bg-neutral-300 mt-20 p-2 w-4/5 sm:w-80 h-10 rounded focus:outline-none"
        placeholder="Search..."
        onChange={handleInput}
      ></input>
    </div>
  );
};

export default SearchBar;
