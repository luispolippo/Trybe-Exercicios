import { useState } from 'react';

const useArray = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (userInput) => {
    setTodos([...todos, userInput]);
  };

  return {
    todos,
    addTodos,
  }
}

export default useArray;