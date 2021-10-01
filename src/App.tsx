import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos= [
  //   new Todo('Learn Ts'),
  //   new Todo('Learn Karate')
  // ];
  const onTodoAdded = (enteredTodo: string) => {
    let todosCopy = [...todos];
    const todoInstance = new Todo(enteredTodo)
    todosCopy.push(todoInstance);
    setTodos(todosCopy)
    console.log({todosCopy, todos})
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
  console.log({todos}, 'asdfasdfhah');
  return (
    <div className="App">
      <NewTodo onTodoAdded={onTodoAdded}/>
      <Todos items={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
