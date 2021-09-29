import React from 'react';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos items={['Learn TS', 'Learn Karate']}/>
    </div>
  );
}

export default App;
