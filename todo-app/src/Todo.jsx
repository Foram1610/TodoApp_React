import React, { useState } from 'react'
import './App.css'
import List from './List';
const Todo = () => {
    const [inputList, setInputList] = useState('');
    const [Items, setItems] = useState([]);
    const itemEvent = (e) => {
        setInputList(e.target.value);
    }
    const addItem = () => {
        setItems((olditem) => {
            return [...olditem, inputList];
        });
        setInputList('');
    };
    const deleteItem = (id) => {
        console.log('delete')
        setItems((olditem)=>{
            return olditem.filter((arrElement,index)=>{
                return index !== id; 
            })
        })
    }
    return (
        <div className="main">
            <div className="todo-main">
                <h1 className="header">Todo List</h1>
                <div className="indata">
                    <input type="text"
                        className="data"
                        placeholder='Enter task...'
                        onChange={itemEvent}
                        value={inputList}
                    />
                    <button className="add-btn" onClick={addItem}>＋</button>
                    <div className="list">
                        <ul className="todo-list">
                            {/* <li className="todo-list-li">
                                <button className="btn-cancel">X</button>
                                <p className="item">{inputList}</p>
                            </li> */}
                            {Items.map((itemval, index) => {
                                return (
                                    <List text={itemval}
                                      key={index} id={index}
                                      onSelect={deleteItem}
                                    />);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
// 
export default Todo