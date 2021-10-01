import Todo from "../models/Todo";
import TodoListItem from "./TodoListItem";
import classes from '../styles/Todos.module.css'

const Todos: React.FC<{items: Todo[]}> = ({items}) => {
    console.log({items})
    return (
        <ul className={classes.todos}>
           {items.map(todo => {
               return <TodoListItem key={todo.id} text={todo.text} />
           })}
        </ul>
    );
};



export default Todos;
