import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
    const {id, task, completed,description} = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
    <li>
        <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
        {task}: {description}
    </li>
    );
}
