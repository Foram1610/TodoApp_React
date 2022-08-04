import React from 'react'
import './App.css'
const List = (props) => {
    return (
        <li className="todo-list-li">
            <button className="btn-cancel"
                onClick={
                    () => {
                        (props.onSelect(props.id));
                    }}>X</button>
            <p className="item">{props.text}</p>
        </li>
    );
}

export default List