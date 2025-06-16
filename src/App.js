import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";
import React from "react";

function App() {
  const [todoItems, setTodoItems] = React.useState([]);
  const [dropdownOpen, setDropdownOpen] = React.useState(false); // if the dropdown menu is open
  const [filter, setFilter] = React.useState("all");

    // run once at start
  React.useEffect(()=>{
    getLocalTodos()
  }, [])
    // keeps checking to save items into local storage
  React.useEffect(()=>{
    saveLocalTodos()
  }, [todoItems,filter])

  // -------- FORM MECHANICS -------------------------->>

  function handleSubmit(formData) {
    const item = formData.get("todoItem");

    // add to all items
    setTodoItems((prevArray) => [
      ...prevArray,
      {
        content: item,
        completed: false,
      },
    ]);
  }

  // -------- TODO CONTAINERS -------------------------->>

  // display all items
  const displayTodos = todoItems.map((item, index) => (
    <li key={index} id={index} className={item.completed ? "cross-addon" : ""}>
      {item.content}
      <div className="right-group">
        <button onClick={() => completeItem(index)}>✔</button>
        <button onClick={() => removeItem(index)}>🗑</button>
      </div>
    </li>
  ));

  // display completed items
  const displayCompleted = todoItems.map((item, index) => {
    if (item.completed) {
      return (
        <li
          key={index}
          id={index}
          className={item.completed ? "cross-addon" : ""}
        >
          {item.content}
          <div className="right-group">
            <button onClick={() => completeItem(index)}>✔</button>
            <button onClick={() => removeItem(index)}>🗑</button>
          </div>
        </li>
      );
    }
  });

  // display uncompleted items
  const displayUnCompleted = todoItems.map((item, index) => {
    if (!item.completed) {
      return (
        <li
          key={index}
          id={index}
          className={item.completed ? "cross-addon" : ""}
        >
          {item.content}
          <div className="right-group">
            <button onClick={() => completeItem(index)}>✔</button>
            <button onClick={() => removeItem(index)}>🗑</button>
          </div>
        </li>
      );
    }
  });

  function removeItem(index) {
    // filter out items with a matching index, leaving the ones with diff index
    setTodoItems((prevArray) => prevArray.filter((item, i) => i != index));
  }

  function completeItem(index) {
    setTodoItems((prevArray) =>
      prevArray.map((item, i) => {
        if (i === index) {
          // cross out item
          return { ...item, completed: !item.completed };
        } else return item;
      })
    );

    // move item to the end
    setTodoItems((prevArray) => {
      prevArray.push(prevArray.splice(index, 1)[0]);
      return prevArray;
    });
  }

  function filterTodo(e) {
    setFilter(e.target.value);
  }

  // ----------------------------------------------//

  function saveLocalTodos(){
    // adding items to the local storage
    localStorage.setItem('todoItems',JSON.stringify(todoItems))
  }

  function getLocalTodos(){
    if (localStorage.getItem("todoItems")===null) {
      localStorage.setItem("todoItems", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todoItems"))
      setTodoItems(todoLocal)
    }
  }

  // ----------------------------------------------//

  return (
    <main>
      <Header />
      <Form
        handleSubmit={handleSubmit}
        dropdownOpen={dropdownOpen}
        filterTodo={filterTodo}
      />
      <Todos
        displayTodos={displayTodos}
        filter={filter}
        displayCompleted={displayCompleted}
        displayUncompleted = {displayUnCompleted}
      />
    </main>
  );
}

export default App;
