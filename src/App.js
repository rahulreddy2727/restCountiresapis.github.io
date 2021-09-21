import React, { Component, useState } from "react";
import Form from "@rjsf/material-ui";
import axios from "axios";
import Basic from "./Basic";
import "./App.css";

export default function App() {
  const [regions, setregions] = useState([
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Polar",
  ]);
  const [countries, setcountries] = useState([]);
  const [selectedRegion, setselectedRegion] = useState("");
  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedData, setselectedData] = useState("");
  const [updateIndex, setupdateIndex] = useState("");
  const [updateCindex, setupdateCindex] = useState(0);

  function storeCountries(regionName, index) {
    setselectedRegion(regionName);
    setselectedCountry("");
    setselectedData("");
    setupdateCindex(index);
    setupdateIndex(index + 1);

    axios
      .get(`https://restcountries.eu/rest/v2/region/${regionName}`)
      .then((res) => {
        setcountries(res.data);
      });
  }

  function storeCountryData(data) {
    setselectedCountry(data.name);
    setselectedData(data);
  }

  return (
    <div className="mainDiv">
      <div className="regionMainDiv" style={{ width: "40%" }}>
        <span className="titleTag">Select a Region</span>
        <div className="alignRegions">
          {regions.map((regionName, index) => (
            <div
              key={index}
              onClick={() => storeCountries(regionName, index)}
              className={
                index === updateIndex
                  ? `regionNameTag addTri${updateIndex} bg${index} addTri`
                  : `regionNameTag bg${index} `
              }
            >
              {console.log(updateIndex)}
              <span>{regionName}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="regionMainDiv" style={{ width: "20%" }}>
        <span className="titleTag">Select Country</span>
        {countries.map((country, index) => (
          <div
            className={`regionTag bg${updateCindex}`}
            onClick={() => storeCountryData(country)}
          >
            <span key={index}>{country.name}</span>
            <img src={country.flag} className="flagIcon" />
          </div>
        ))}
      </div>
      {selectedData ? (
        <div className="regionMainDiv" style={{ width: "20%" }}>
          <span className="regionTag">
            {selectedRegion}/{selectedCountry}
          </span>
          <div className="alignFlag">
            <img
              src={selectedData && selectedData.flag}
              className="inputFlagIcon"
            />
            <div>
              <div>
                <span>{selectedData && selectedData.name}</span>
                <span>({selectedData && selectedData.cioc})</span>
              </div>
              <span>{selectedData && selectedData.capital}</span>
            </div>
          </div>
          <Basic data={selectedData} />
          {/* <span>Demonym: {selectedData &&selectedData.demonym}</span>
          <span>Calling Code: {selectedData &&selectedData.callingCodes[0]}</span>
          
          <span>Currency: {selectedData && selectedData.currencies && selectedData.currencies[0].symbol} {selectedData && selectedData.currencies && selectedData.currencies[0].name}</span>
          <span>Population: {selectedData &&selectedData.population}</span> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
