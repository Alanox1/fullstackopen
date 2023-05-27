import React from "react"
const Form = ({handleSubmit,handleChange,handleChangeNumber,newName,newNumber}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                name: <input placeholder="nombre..." onChange = {handleChange} value={newName} required/>
                </div>
                <div>
                number: <input placeholder="Escribir el número..." type='number' value={newNumber} onChange={handleChangeNumber} required />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        )
}

export default Form