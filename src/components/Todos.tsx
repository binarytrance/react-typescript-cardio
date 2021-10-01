import Todo from "../models/Todo";
import TodoListItem from "./TodoListItem";
import classes from '../styles/Todos.module.css'

const Todos: React.FC<{items: Todo[], removeTodo: (id: string) => void}> = ({items, removeTodo}) => {
    console.log({items})
    return (
        <ul className={classes.todos}>
           {items.map(todo => {
               return <TodoListItem key={todo.id} id={todo.id} text={todo.text} removeTodo={removeTodo}/>
           })}
        </ul>
    );
};



export default Todos;
