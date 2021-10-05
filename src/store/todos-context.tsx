import React, { useState } from 'react';
import Todo from "../models/Todo";

// type definition stored in this type alias
type TodosContextObj = {
    items: Todo[];
    addTodo: (enteredTodo: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  // const todos= [
  //   new Todo('Learn Ts'),
  //   new Todo('Learn Karate')
  // ];
  const addTodo = (enteredTodo: string) => {
    let todosCopy = [...todos];
    const todoInstance = new Todo(enteredTodo)
    todosCopy.push(todoInstance);
    setTodos(todosCopy)
    // setTodos(prevTodos => prevTodos.concat(todoInstance))
  }
  const removeTodo = (id: string) => {
    // const todosCopy = [...todos];
    // todosCopy.filter(todo => {
    //   return todo.id !== id;
    // })
    setTodos(prevTodos => prevTodos.filter(todo => {
      return todo.id !== id;
    }))
  }
  const contextValue: TodosContextObj = {
      items: todos,
      addTodo,
      removeTodo
  }
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;