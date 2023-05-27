import React from "react"

const Message = ({message,colorRed}) => {

    if(message === null) return
   
    return (
        <h2 className={colorRed === false ? "message" : "message red"}>{message}</h2>
    )
}

export default Message