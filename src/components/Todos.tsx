import Todo from "../models/Todo";
import TodoListItem from "./TodoListeItem";

const Todos: React.FC<{items: Todo[]}> = ({items}) => {
    return (
        <ul>
           {items.map(todo => {
               return <TodoListItem key={todo.id} text={todo.text} />
           })}
        </ul>
    );
};



export default Todos;
