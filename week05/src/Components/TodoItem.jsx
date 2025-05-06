import React from "react";
import Remove from '../Assets/img/btn_del.svg';

const TodoItem = ({ id, text, checked, onToggle, onDelete }) => {
    return (
        <div className="todolist">
            <div className="addtext">
                <input className="checkbox"
                    onChange={() => onToggle(id)}
                    type="checkbox"
                    checked={checked} />
                <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>{text}</p>
            </div>
            <button className="remove" onClick={() => onDelete(id)}><img src={Remove} alt="delete" /></button>
        </div>
    )
}

export default TodoItem;