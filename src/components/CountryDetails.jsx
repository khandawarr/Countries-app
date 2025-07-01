import { useEffect, useState } from "react";
import "./countrydetails.css";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom"; // ✅ FIXED
import ShimmerDetails from "./ShimmerDetails";
import { useTheme } from "../../hooks/useTheme";

export default function CountryDetails() {
  const { state } = useLocation();
  const [context] = useTheme()
  const params = useParams();
  const countryName = params.country;
  const [country, setCountry] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}/?fullText=true`)
      .then((res) => res.json())
      .then(async ([ConData]) => {
        const borders = ConData.borders || [];

        const borderNames = await Promise.all(
          borders.map((code) =>
            fetch(`https://restcountries.com/v3.1/alpha/${code}`)
              .then((res) => res.json())
              .then(([data]) => data.name.common)
          )
        );

        setCountry({
          name: ConData.name.common,
          flag: ConData.flags.svg,
          nativeName: ConData.name.nativeName ? Object.values(ConData.name.nativeName)[0]?.common : ConData.name.common,
          pop: ConData.population,
          region: ConData.region,
          subRegion: ConData.subregion,
          capital: ConData.capital,
          tld: ConData.tld,
          currencies: Object.values(ConData.currencies || {})
            .map((c) => c.name)
            .join(", "),
          languages: Object.values(ConData.languages || {}).join(", "),
          borders: borderNames,
        });
      })
      .catch((err) => console.log(err));
  }, [countryName]);

  return (
    <>
      {!country ? (
        <ShimmerDetails />
      ) : (
        <main className={`${!context ? 'Dark' : ''}`}>
          <span className="back">
            <a onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp; Back
            </a>
          </span>
          <div className="container">
            <div className="img-center-wrapper">
              {!imgLoaded && <div style={{position: 'absolute', top:0, left:0, right:0, bottom:0, width:'100%', height:'100%', zIndex:1}}><ShimmerDetails /></div>}
              <img
                src={country.flag}
                alt={country.name}
                loading="lazy"
                style={imgLoaded ? {} : {visibility: 'hidden'}}
                onLoad={() => setImgLoaded(true)}
              />
            </div>
            <div className="information">
              <h3>{country.name}</h3>
              <div className="pflex">
                <p>
                  <b>Native Name:</b> {country.nativeName}
                </p>
                <p>
                  <b>Population:</b> {country.pop.toLocaleString("en-IN")}
                </p>
                <p>
                  <b>Region:</b> {country.region}
                </p>
                <p>
                  <b>Sub Region:</b> {country.subRegion}
                </p>
                <p>
                  <b>Capital:</b> {country.capital}
                </p>
                <p>
                  <b>Top Level Domain:</b> {country.tld}
                </p>
                <p>
                  <b>Currencies:</b> {country.currencies}
                </p>
                <p>
                  <b>Languages:</b> {country.languages}
                </p>
              </div>

              {country.borders.length !== 0 && (
                <div className="border-country">
                  <h4>
                    <b>Border Countries:</b>
                  </h4>
                  <span className="block">
                    {country.borders.map((border, idx) => (
                      <Link key={idx} to={`/${border}`}>
                        {border}
                      </Link>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
