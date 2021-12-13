import React, { Fragment, useState, useRef, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const KEY = 'todoApp.todos'

export function App(){
    const [todos, setTodos] = useState([])

    const todoTaskRef = useRef();
    const descriptionRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    useEffect(()=>{
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos){setTodos(storedTodos);
        }
    },[])

    useEffect(() => {
        localStorage.setItem(KEY,JSON.stringify(todos));
    },[todos])

    const handleTodoAdd = () => {
        const description = descriptionRef.current.value;
        const task = todoTaskRef.current.value;
        if (task === '' || description === '') return;
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(),task,completed:false,description}];
        });
        todoTaskRef.current.value = null;
        descriptionRef.current.value = null;
    };

    const handleClear = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    const handleClearAll = () => {
        const clearedTodos = [];
        setTodos(clearedTodos);
    }

    return (
    <Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
        <button onClick={handleTodoAdd}>+</button>
        <button onClick={handleClear}>-</button>
        <button onClick={handleClearAll}>-------</button>
        <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar!</div>
        <input ref={descriptionRef} type="text" placeholder="Descripcion"/>
    </Fragment>
    );
}