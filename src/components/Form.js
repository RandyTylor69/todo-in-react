import Dropdown from "./Dropdown"

export default function Form(props){
    return(
        <form 
            action={props.handleSubmit}
        >
            <input
                name="todoItem"
                placeholder="Write a journal"
            ></input>
            <button>+</button>
            <Dropdown 
                dropdownOpen = {props.dropdownOpen}
                filterTodo = {props.filterTodo}
            />
        </form>
    )
}