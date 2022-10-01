import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import EntreAFaire from "./components/EntreAFaire"
import ListeAFaire from "./components/ListeAFaire";
import { v4 as uuidv4 } from "uuid";

const App = () => {

  const [todos, setTodos] = useState(initialAFaire())

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  function initialAFaire() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || [] 
  }
 
  const changerAFaire = id => {
    setTodos(prevState => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const suppAFaire = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const ajoutAFaire = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };
    setTodos([...todos, newTodo])
  };

  const ajourAFaire = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (   
    <>
      <Switch>
        <Route >
          <div className="container">
            <div className="inner">
              <Header />
              <EntreAFaire addTodoProps={ajoutAFaire} />
              <ListeAFaire 
                todos={todos} 
                handleChangeProps={changerAFaire} 
                deleteTodoProps={suppAFaire}
                ajourAFaire ={ajourAFaire} 
              />
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App