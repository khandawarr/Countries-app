import { Link } from 'react-router'

export default function countryCard({ name, population, region, capital, flags, data}) {
  return (
    <Link className="anchor" to={`/${name}`} state={{data}}>
                <div className="country-card">
                <img src={flags.png} alt={name + " flag"}/>
                <p className="head"><b>{name}</b> </p>
                <div className="info">
                    <p><b>Population:</b> {population}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Capital:</b> {capital}</p>
                </div>
            </div>
</Link>
  )
}
