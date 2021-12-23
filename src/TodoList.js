import React from "react";
import './todoListStyle.css';
import expand from './assets/expand_more_black_24dp.svg';

function TodoList(props){
        return(
            <div className="todoMain">
                <h1>todos</h1>
                <div className="todoForm">
                    <form onSubmit={props.addItem}>
                    <div onClick={() => props.completeAllItems()}>
                    <img src={expand} alt="expand" className="toggleList"/>
                    </div>
                    <input className="newTodo" placeholder="What needs to be done?" ref={props.inputElement} 
                    value={props.currentItem.text} onChange={props.handleInput}/>
                    </form>
                </div>
            </div>
        )
    }

export default TodoList