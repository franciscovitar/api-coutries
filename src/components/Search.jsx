import React, { useState } from "react";

function Search({ onSearch, onSelect, mode }) {
  const [inputValue, setInputValue] = useState("");

  const submitHanlder = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      onSearch("all");
    } else {
      onSearch("name/" + inputValue);
    }
  };

  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <div className="search-container">
      <form className={mode ? "dark" : "light"} onChange={submitHanlder}>
        <input
          className={mode ? "dark" : "light"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search for a country"
        ></input>
        <i className={`bi bi-search ${mode ? "dark" : "light"}`}></i>
      </form>
      <div className={`select ${mode ? "dark" : "light"}`}>
        <select onChange={selectHandler}>
          <option className={mode ? "dark" : "light"} value="all">
            Filter by region
          </option>
          <option className={mode ? "dark" : "light"} value="region/Africa">
            Africa
          </option>
          <option className={mode ? "dark" : "light"} value="region/America">
            America
          </option>
          <option className={mode ? "dark" : "light"} value="region/Asia">
            Asia
          </option>
          <option className={mode ? "dark" : "light"} value="region/Europe">
            Europe
          </option>
          <option className={mode ? "dark" : "light"} value="region/Oceania">
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
}

export default Search;
