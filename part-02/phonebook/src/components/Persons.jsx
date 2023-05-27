import React from "react"
const Persons = ({personsToSee,handleDelete}) => {

      return <div>
      {personsToSee.map(el =><li key={el.name}>
                                    {el.name} <b>{el.number}</b>
                                    <button onClick={() => handleDelete(el)}>Delete</button>
                              </li>
      )}
</div>
}
        
   
export default Persons