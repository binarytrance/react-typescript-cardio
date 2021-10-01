import React from 'react';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const todos= [
    new Todo('Learn Ts'),
    new Todo('Learn Karate')
  ];
  console.log(todos)
  return (
    <div className="App">
      <Todos items={todos}/>
    </div>
  );
}

export default App;
