import React from 'react';
import './App.css';

import Form from './components/Form';
import TodoListContainer from './components/TodoList/TodoListContainer';

//const sample = [{id: 1, text: "hello", completed: false}]

function App() {
  return (
    <div className="App">
      <Form title={'Todo Text'}/>
      <TodoListContainer/>
    </div>
  );
}

export default App;
