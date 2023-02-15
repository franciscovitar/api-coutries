import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PaisGrande({ mode }) {
  const { countryName } = useParams();
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setPaises(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className={`fondo ${mode ? "dark" : "light"}`}>
      <div className="pais-grande-container">
        <div className={`back ${mode ? "dark" : "light"}`}>
          <i class={`bi bi-arrow-90deg-left ${mode ? "dark" : "light"}`}></i>
          <a className={mode ? "dark" : "light"} href="/">
            Back
          </a>
        </div>
        {paises?.map((pais, index) => {
          return (
            <div key={index} className="paises-grande-container">
              <div className="left">
                <img alt="" src={pais.flags.png}></img>
              </div>
              <div className={`right ${mode ? "dark" : "light"}`}>
                <div className="up">
                  <h2>{pais.name.common}</h2>
                  <div className="up-up">
                    <div className="up-left">
                      <p>Population: {pais.population}</p>
                      <p>Region: {pais.region}</p>
                      <p>Sub Region: {pais.subregion}</p>
                      <p>Capital: {pais.capital}</p>
                    </div>
                    <div className="up-right">
                      <p>Top Level Domain:{pais.topLevelDomain}</p>
                    </div>
                  </div>
                </div>
                <div className="down"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PaisGrande;
