import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos"
import React from "react"

function App() {

  const [todoItems, setTodoItems] = React.useState([])
  
  // -------- FORM MECHANICS -------------------------->>

  function handleSubmit(formData) {
    const item = formData.get("todoItem")
    setTodoItems(prevArray=>[...prevArray, item])
  }

  // -------- TODO CONTAINERS -------------------------->>

  const displayTodos = todoItems.map((item, index) => (
    <li key={index} id={index}>
      {item} 
      <button
        onClick={()=>removeItem(index)}
      >x</button>
    </li>
  ))

  function removeItem(index){
    setTodoItems(prevArray=>
      prevArray.filter((item, i)=>i!=index)
    )
  }



  return (
    <main>
      <Header />
      <Form handleSubmit = {handleSubmit}/>
      <Todos 
      todoItems = {todoItems} 
      removeItem = {removeItem}
      displayTodos = {displayTodos}/>
    </main>
  );
}

export default App;
