import React, { useEffect, useState } from "react";
import CountryCard from "./countryCard";
import ShimmerList from "./components/ShimmerList";
import { useLocation } from "react-router";
// import country from "/data.js";

export default function countryList({search}) {
    const [country, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,languages,tld,currencies,borders').then((res) => res.json())
    .then((Countries) => {
        setCountries(Countries)
    })
    },[])
 
    return (
      <>
      {!country.length ? <ShimmerList /> :
    <div className="countries">
      {country.filter((country) => country.name.common.toLowerCase().includes(search) || country.region.toLowerCase().includes(search))
      .map((counrty) => {

        return  (
          <CountryCard
            key={counrty.name.common}
            name={counrty.name.common}
            population={counrty.population.toLocaleString("en-IN")}
            region={counrty.region}
            capital={counrty.capital}
            flags={counrty.flags}
            data={counrty}
          />
        );
      })}
    </div>}
    </>
  );
}
