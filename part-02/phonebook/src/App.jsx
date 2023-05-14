import React, { useState } from 'react'
import Filter from './components/FIlter'
import Form from "./components/Form"
import Persons from './components/Persons'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState(0)
  const [ filter, setFilter ] = useState("")
  const [showAll, setShowAll] = useState(false)


  const handleChange = (e) => setNewName(e.target.value)
  const handleChangeNumber = (e) => setNewNumber(e.target.value)
  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
    setShowAll(true)
  } 

  const personsToSee = showAll ? persons.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())) : persons
  const handleSubmit = (e) => {
      e.preventDefault()

      if(persons.find(el => el.name === newName)) return alert(`${newName} is already added to phonebook`)
     
      const newPerson = {
        name : newName,
        number : newNumber
      }
     
      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewNumber(0)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      <h3>Add a new</h3>
      <Form handleSubmit={handleSubmit} 
                  handleChange={handleChange} 
                  newName={newName} 
                  newNumber={newNumber} 
                  handleChangeNumber={handleChangeNumber}  
      />
      <h2>Numbers</h2>
      <Persons personsToSee={personsToSee} />
    </div>
  )
}

export default App
