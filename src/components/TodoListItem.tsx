import classes from '../styles/TodoListItem.module.css';

const TodoListItem: React.FC<{text: string, id: string, removeTodo: (id: string) => void}> = ({ text, id, removeTodo}) => {
    return <li className={classes.item}>{text} <span onClick={() => removeTodo(id)}>Remove</span></li>
}

export default TodoListItem;