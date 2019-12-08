import React from 'react';
import './App.css';
import TodoList from "./ui/TodoList";


function App(store) {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
