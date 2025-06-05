
export default function Form(props){
    return(
        <form action={props.handleSubmit}>
            <input
                placeholder="Write a journal"
            ></input>
            <button>+</button>
        </form>
    )
}