import React from 'react'

export default function TodoList({ tasks }) {
  return (
    <div>
      <h1>To-Do</h1>
      <ul>
        {
          tasks.map((task, index) => (
            <li key={index}>{ task }</li>
          ))
        }
      </ul>
    </div>
  )
}
