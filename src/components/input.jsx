import React from 'react'
export default function input({setSearch}) {
  
  return (
    <div className="input">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
           type="text" placeholder="Search for a country..."/>
        </div>
  )
}
