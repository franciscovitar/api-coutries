import React, { useEffect, useState } from "react";
import PaisContainer from "./PaisContainer";
import Search from "./Search";

function Paises({ mode }) {
  const [paises, setPaises] = useState([]);

  const getAllCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setPaises(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = async (countryName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/${countryName}`);
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setPaises(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSelect = async (regionName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/${regionName}`);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      setPaises(data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <div className={`paises-container ${mode ? "dark" : "light"}`}>
      <Search mode={mode} onSearch={onSearch} onSelect={onSelect}></Search>
      <div className="pais-map">
        {paises.map((pais, index) => {
          return (
            <PaisContainer mode={mode} key={index} pais={pais}></PaisContainer>
          );
        })}
      </div>
    </div>
  );
}

export default Paises;
