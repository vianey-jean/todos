import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa";

const EntreTodo = (props) => {
  const [entreText, changerEntreText] = useState({
    title: "",
  })

  const pourChanger = e => {
changerEntreText({
      ...entreText,
      [e.target.name]: e.target.value,
    })
  }

  const ajouter = e => {
    e.preventDefault();
    if(entreText.title.trim()) {
      props.addTodoProps(entreText.title);
  changerEntreText({
        title: "",
      })
    } else {
      alert("Vueillez d'Ajouter le chose à Faire svp")
    } 
  };

  return (
    <form onSubmit={ajouter} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Ajouter les choses a faire ici..."
        value={entreText.title}
        name="title"          
        pourChanger={pourChanger}
      />
      <button className="input-submit">
        <FaPlusCircle style={{ color: "darkcyan", 
        fontSize: "30px", 
        marginTop: "2px" }}/>
      </button>
    </form>
  )
}

export default EntreTodo
