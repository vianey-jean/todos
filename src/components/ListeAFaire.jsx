import React from "react"
import ChoseAFaire from "./ChoseAFaire";

const ListeAFaire = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <ChoseAFaire
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}
export default ListeAFaire