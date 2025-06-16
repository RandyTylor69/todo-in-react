import React from "react";

export default function Dropdown(props){
    
    return(
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all" onClick={props.filterTodo}>All</option>
                <option value="completed" onClick={props.filterTodo}>Completed</option>
                <option value="uncompleted" onClick={props.filterTodo}>Uncompleted</option>
            </select>

        </div>
    )
}