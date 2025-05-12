import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.text)];
    case ACTIONS.TOGGLE_TODO:
      
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      
      return todos;
  }
}


function newTodo(text) {
  return { id: Date.now(), text: text, completed: false };
}

export const TodoListReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const [inputText, setInputText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (inputText.trim() === '') return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text: inputText } });
    setInputText(''); 
  }

  return (
    <>
      <h2>Todo List (useReducer)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '5px 0' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
                style={{ cursor: 'pointer' }}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
              style={{ marginLeft: 'auto', cursor: 'pointer', color: 'red', border: 'none', background: 'none' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
