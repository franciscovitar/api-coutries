import React from "react";

function PaisContainer({ pais, mode }) {
  return (
    <div className="pais-container">
      <a href={`/name/${pais.name.common}`}>
        <div className="up">
          <img alt="" src={pais.flags.png}></img>
        </div>
        <div className={`down ${mode ? "dark" : "light"}`}>
          <div className="down-container">
            <h4>{pais.name.common}</h4>
            <p>
              <span>Population:</span> {pais.population}
            </p>
            <p>
              <span>Region:</span> {pais.region}
            </p>
            <p>
              <span>Capital:</span> {pais.capital}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PaisContainer;
