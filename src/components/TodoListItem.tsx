import classes from '../styles/TodoListItem.module.css';

const TodoListItem: React.FC<{text: string, removeTodo: () => void}> = ({ text, removeTodo}) => {
    return <li className={classes.item}>{text} <span onClick={removeTodo}>Remove</span></li>
}

export default TodoListItem;