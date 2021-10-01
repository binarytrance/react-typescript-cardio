import { useRef } from "react";

const NewTodo: React.FC<{onTodoAdded: (enteredTodo: string) => void}> = ({onTodoAdded}) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0) {
            return;
        }
        console.log('submit handler', enteredText)
        onTodoAdded(enteredText)
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;