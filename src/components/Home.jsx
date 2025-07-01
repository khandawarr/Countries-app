import { useEffect } from 'react'
import { useState } from 'react'
import Input from './input'
import Filter from './filter'
import CountryList from '../countryList'
import { useTheme } from '../../hooks/useTheme'


export default function Home() {
  const [context] = useTheme()
  const [search, setSearch] = useState('');
  const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight})

  useEffect(() => { window.addEventListener('resize' , () => {
  setSize({width: window.innerWidth, height: window.innerHeight})
  })},[])

  return (
    <>
     <main className={`${!context ? 'Dark' : ''}`}>
    <div className="input-filter-div">
    <Input  setSearch={setSearch} />
    <Filter setSearch={setSearch} />
   </div>
    <CountryList search={search}/>
   </main>
   </>
  )
}
