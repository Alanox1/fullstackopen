import React from "react"
const Form = ({handleSubmit,handleChange,handleChangeNumber,newName,newNumber}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                name: <input placeholder="nombre..." onChange = {handleChange} value={newName}/>
                </div>
                <div>
                number: <input type='number' value={newNumber} onChange={handleChangeNumber}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        )
}

export default Form