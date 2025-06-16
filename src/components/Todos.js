export default function Todos(props) {
  return (
    // return all
    <ul>
      {props.filter==="all" && props.displayTodos}
      {props.filter==="completed" && props.displayCompleted}
      {props.filter==="uncompleted" && props.displayUncompleted}
    </ul>
  );
}
