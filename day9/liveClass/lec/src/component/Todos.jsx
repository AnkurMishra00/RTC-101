import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Todos = () => {
    const [newTodo,setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(4)
    const saveInfo = () => {
        fetch(" http://localhost:8080/todos", {
            method:"POST",
            headers: {
                "content-type":"application/json",
            },
                body: JSON.stringify({
                    "value": newTodo, "isCompleted":false,
                }),
        })
        .then((r) => r.json())
 .then((d) => {
     setTodos([...todos,d]);
    setNewTodo("");
 });
        
    }
useEffect(() => {
        fetch(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
 .then((r) => r.json())
 .then((d) => {
    setTodos(d);
 });
},[page,limit]);
  return (
    <div>Todos
        <div>
            <div>
                <input value={newTodo} onChange = {({target}) => setNewTodo(target.value)}/>
                <button onClick={saveInfo}>+</button>
                <button onClick={() => setPage(setPage=>setPage+1)}>NextPage+</button>
                <button onClick={() => setPage(setPage=>setPage-1)}>Prepage-</button>
                <button onClick={() => setLimit(setLimit=>setLimit+1)}>Limit+</button>
                <button onClick={() => setLimit(setLimit=>setLimit-1)}>Limit-</button>
            </div>
           
            {todos.map((todo) => (
                <div key={todo.id}>{todo.value}</div>
            ))}
        </div>
    </div>
  )
}

export default Todos;