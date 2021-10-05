import TodoListItem from "./TodoListItem";
import classes from '../styles/Todos.module.css'
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
    const todosContext = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
           {todosContext.items.map(todo => {
               return <TodoListItem key={todo.id} text={todo.text} removeTodo={todosContext.removeTodo.bind(null, todo.id)}/>
           })}
        </ul>
    );
};



export default Todos;
