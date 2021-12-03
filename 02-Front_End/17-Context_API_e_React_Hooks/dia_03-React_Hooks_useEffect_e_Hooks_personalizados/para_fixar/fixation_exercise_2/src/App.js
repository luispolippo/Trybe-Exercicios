import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import useArray from './hooks/useArray';

function App() {
  const [newInput, setNewInput] = useState('');
  const { todos, addTodos } = useArray();

  const handleOnChange = ({ target: { value } }) => {
    setNewInput(value)
  };

  const handleOnClick = () => {
    addTodos(newInput);
    setNewInput('');
  }

  return (
    <div className="App">
      <input
        placeholder="Add task"
        value={ newInput }
        onChange={ handleOnChange }
      />
      <button
        type="button"
        onClick={ handleOnClick }
      >
        Add
      </button>
      <TodoList tasks={ todos }/>
    </div>
  );
}

export default App;
