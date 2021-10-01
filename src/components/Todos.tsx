import Todo from "../models/Todo";
import TodoListItem from "./TodoListItem";
import classes from '../styles/Todos.module.css'

const Todos: React.FC<{items: Todo[], removeTodo: (id: string) => void}> = ({items, removeTodo}) => {
    return (
        <ul className={classes.todos}>
           {items.map(todo => {
               return <TodoListItem key={todo.id} text={todo.text} removeTodo={removeTodo.bind(null, todo.id)}/>
           })}
        </ul>
    );
};



export default Todos;
