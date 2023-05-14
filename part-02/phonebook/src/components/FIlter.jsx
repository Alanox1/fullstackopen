import React from "react"

const Filter = ({filter,handleChangeFilter}) => <input placeholder="filtrar por nombre" value={filter} onChange={handleChangeFilter} />

export default Filter