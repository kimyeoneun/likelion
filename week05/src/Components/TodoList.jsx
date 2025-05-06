import React, { useState } from "react";
import Add from '../Assets/img/btn_add.svg';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [nextId, setNextid] = useState(1);

    const handleAdd = () => {
        if (input.length < 1) {
            alert("오늘 할 일을 입력해주세요!");
            return;
        }

        const newTodo = { id: nextId, text: input, checked: false };
        setTodos([...todos, newTodo]);
        setInput("");
        setNextid(nextId + 1);
    }

    const handleToggle = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <header>
                <h1>TO-DO LIST</h1>
                <div className="add">
                    <input className="input_text" onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="오늘 할 일을 입력해주세요!" />
                    <img className="btn_add" onClick={handleAdd} src={Add} alt="add" />
                </div>
            </header>
            <main className="main">
                <div className="container">
                    {todos.map((todo) =>
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            checked={todo.checked}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    )}
                </div>
            </main>
        </div>
    )
}

export default TodoList;