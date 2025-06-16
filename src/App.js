import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";
import React from "react";

function App() {
  const [todoItems, setTodoItems] = React.useState([]);
  const [completedItems, setCompletedItems] = React.useState([])
  const [toggleComplete, setToggleComplete] = React.useState(false)

  // -------- FORM MECHANICS -------------------------->>

  function handleSubmit(formData) {
    const item = formData.get("todoItem");
    setTodoItems((prevArray) => [...prevArray, {
      content: item,
      completed: false
    }]);
  }


  // -------- TODO CONTAINERS -------------------------->>

  const displayTodos = todoItems.map((item, index) => (
     <li key={index} id={index} className={item.completed? "cross-addon":""}>
      {item.content}
      <div className="right-group">
        <button onClick={() => completeItem(index)}
          >✔</button>
        <button onClick={() => removeItem(index)}>🗑</button>
      </div>
    </li>
  ));

  function removeItem(index) {
    setTodoItems((prevArray) => prevArray.filter((item, i) => i != index));
  }

  function completeItem(index){
    // cross out item
    setTodoItems(prevArray => prevArray.map((item, i)=>{
      return (
        i === index ? {...item, completed: !item.completed} : item
      )
    }))

    // move item to the end
    setTodoItems(prevArray => {
      prevArray.push(prevArray.splice(index, 1)[0])
      return(prevArray)
    })
  }

  console.log(todoItems)

  return (
    <main>
      <Header />
      <Form 
      handleSubmit={handleSubmit} 
      />
      <Todos
        displayTodos={displayTodos}
      />
    </main>
  );
}

export default App;
