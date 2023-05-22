import axios from 'axios'
import { useState,  useEffect } from 'react'
import Countries from './components/Countries'


function App() {

  const [input , setInput] = useState("")
  const [countries,setCountries] = useState([])
  const handleChangeInput = (e) => setInput(e.target.value)

  useEffect(() => {
      axios
      .get(`https://restcountries.com/v3.1/name/${input}`)
      .then(response => {
          setCountries(response.data)
      })
  }, [input])
 
  return (
    <>
      <h2>Find country</h2>
      <input type='text' value={input} onChange={handleChangeInput}/>
      <div>
        <Countries countries={countries} setCountries={setCountries}/>
      </div>
    </>
  )
}

export default App
