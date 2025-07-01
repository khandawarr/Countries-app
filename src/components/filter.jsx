import React from 'react'

export default function filter({setSearch}) {
  return (
    <div className="filter" onChange={ (e) => {setSearch(e.target.value.toLowerCase())}}>
          <select>
            <option value="Filter by region" hidden>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
  )
}
