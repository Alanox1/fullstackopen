import React, { useState, useEffect } from 'react'
import Filter from './components/FIlter'
import Form from "./components/Form"
import Persons from './components/Persons'
import personsService from "./services/persons.js"
import Message from './components/Message'
import './index.css'
const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState("")
  const [ filter, setFilter ] = useState("")
  const [ showAll, setShowAll ] = useState(false)
  const [ showMessage , setShowMessage ] = useState(null)
  const [ colorRedError , setColorRedError ] = useState(false)
  const handleChange = (e) => setNewName(e.target.value)
  const handleChangeNumber = (e) => setNewNumber(e.target.value)
  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
    setShowAll(true)
  } 

  const personsToSee = showAll ? persons.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())) : persons

  const handleSubmit = (e) => {
      e.preventDefault()
     
      if(persons.find(el => el.name.toLowerCase() === newName.toLowerCase())){
        const encontrado = persons.find(el => el.name.toLowerCase() === newName.toLowerCase())
        
        const url = `http://localhost:3001/persons/${encontrado.id}`
        
        const cambiarNumero = {
          ...encontrado,
          number : newNumber
        }
      
        personsService.update(url,cambiarNumero)
        .then(data => {
          setPersons(persons.map(person => person.id !== cambiarNumero.id ? person : data))
          setShowMessage(
            `User '${cambiarNumero.name}' number was changed`
          )
          setTimeout(() => {
            setShowMessage(null)
          }, 3000)
          setNewName("")
          setNewNumber("")
        })
        .catch(error => {
          console.log(error)
            setShowMessage(`User ${cambiarNumero.name} was removed from server`)
            setColorRedError(true)
            setTimeout(() => {
              setShowMessage(null)
              setColorRedError(false)
            }, 3000)
        })
      
      }
      else{
        const newPerson = {
          name : newName,
          number : newNumber,
        }
        
        personsService.create(`http://localhost:3001/persons`,newPerson)
        .then(data => {
          setPersons(persons.concat(data))
          setNewName("")
          setNewNumber("")

          setShowMessage(
            `User '${newPerson.name}' was added to the server`
          )
          setTimeout(() => {
            setShowMessage(null)
          }, 3000)
        }) 
        
      }
    
  }

  useEffect(() => {
      personsService.getAll()
      .then(data => setPersons(data))
  },[])
  
  const handleDelete = (el) => {
    let borrarUsuario = confirm(`Desea eliminar el usuario ${el.name} ?`)
    if(borrarUsuario === false) return
    personsService.deletePerson(`http://localhost:3001/persons/${el.id}`)
    .then(data => setPersons(persons.filter(person => person.id !== el.id)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={showMessage} colorRed={colorRedError}/>
      <h3>Filtrar:</h3>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      <h3>Add a new</h3>
      <Form handleSubmit={handleSubmit} 
                  handleChange={handleChange} 
                  newName={newName} 
                  newNumber={newNumber} 
                  handleChangeNumber={handleChangeNumber} 
                   
      />
      <h2>Numbers</h2>
      <Persons personsToSee={personsToSee} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
