import classes from '../styles/TodoListItem.module.css';

const TodoListItem: React.FC<{text: string}> = ({ text}) => {
    return <li className={classes.item}>{text}</li>
}

export default TodoListItem;