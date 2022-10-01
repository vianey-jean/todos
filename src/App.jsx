import React, { useState, useEffect } from "react"
import { Route} from "react-router-dom"
import Header from "./components/Header"
import EntreTodo from "./components/EntreTodo"
import ListeAFaire from "./components/ListeAFaire";
import { v4 as uuidv4 } from "uuid";

const App = () => {

  const [todos, setTodos] = useState(getInitialTodos())

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || [] 
  }
 
  const handleChange = id => {
    setTodos(prevState => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, complete: !todo.complete
        }
      }
      return todo
    }))
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const addChoseAFaire = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      complete: false  
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle, id) => {
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
      <Route>
          <div className="container">
            <div className="inner">
              <Header />
              <EntreTodo addTodoProps={addChoseAFaire} />
              <ListeAFaire 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo}
                setUpdate ={setUpdate} 
              />
            </div>
          </div>
        </Route>
      
    </>
  );
}

export default App