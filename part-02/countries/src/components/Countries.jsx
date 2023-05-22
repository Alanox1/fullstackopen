function Countries({countries,setCountries}) {
   
        if(countries.length > 10) return <h2>Too many matches, specify another filter</h2>

        if(countries.length >= 2 && countries.length <= 10) return countries.map(el => {
          return (
            <div>
              <li>{el.name.common}</li>
              <button onClick={() => setCountries([el])}>show</button>
            </div>
          )
        } )
         
      
        if(countries.length === 1) return  countries.map(el => {
      return <div>
            <h2>{el.name.common}</h2>
            <p>Capital: {el.capital}</p>
            <p>Population: {el.population}</p>
            
            <div>
              <h2>Languages</h2>
           
               {/* <ul>
                
               {el.languages.map(el => {
                return console.log(el)
               })}
              </ul>   */}
            </div>
            <img src={`${el.flags.png}`} alt={`${el.flags.alt}`} />
          </div>
        } 
    );
}

export default Countries;