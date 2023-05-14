import React from "react"
const Persons = ({personsToSee}) =>
        <div>
            {personsToSee.map(el =><li key={el.name}>{el.name} <b>{el.number}</b></li>)}
      </div>
   
export default Persons