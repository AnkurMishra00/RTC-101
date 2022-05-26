import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Todos = () => {
    const [newTodo,setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

useEffect(() => {
        fetch(" http://localhost:8080/todos")
 .then((r) => r.json())
 .then((d) => {
    setTodos(d);
 });
},[]);
  return (
    <div>Todos
        <div>
            <div>
                <input />
                <button>+</button>
            </div>
           
            {todos.map((todo) => (
                <div key={todo.id}>{todo.value}</div>
            ))}
        </div>
    </div>
  )
}

export default Todos;