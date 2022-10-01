import React, { useState, useEffect } from "react"
import styles from "./ChoseAFaire.module.css"
import { FaTrash } from "react-icons/fa";

const ChoseAFaire = (props) => {
  const [editing, setChanger] = useState(false)

  useEffect(() => {
    return () => {
      console.log("Effacer ça...")
    }
  }, [])

  const handleChanger = () => {
    setChanger(true)
  } 

  const handleMettreAJour = (event) => {
    if (event.key === "Enter" ) {
      setChanger(false)
    }
  }

  const completeStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { complete, id, title } = props.todo
  
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleChanger} style={viewMode}>
        <input 
          type="checkbox" 
          className={styles.checkbox}
          checked={complete}  
          pourChanger={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{color: "orangered", fontSize: "16px"}}/>
        </button>
        <span style={complete ? completeStyle : null} >{title}</span>
      </div>
      <input 
        type="text" 
        style={editMode} 
        className={styles.textInput} 
        value={title} 
        pourChanger={(e)=> {props.setUpdate(e.target.value, id)}}
        onKeyDown={handleMettreAJour}
      />
    </li>
  )
}

export default ChoseAFaire