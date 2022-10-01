import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa";

const EntreTodo = (props) => {
  const [inputText, changerinputText] = useState({
    title: "",
  })

  const onChange = e => {
changerinputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const ajouter = e => {
    e.preventDefault();
    if(inputText.title.trim()) {
      props.addTodoProps(inputText.title);
  changerinputText({
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
        value={inputText.title}
        name="title"          
        onChange={onChange}
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
