import React from "react";
import { useState } from "react";

import "./todoListStyle.css";
import expand from "./assets/expand_more_black_24dp.svg";

import { useDispatch, useSelector } from "react-redux";

function TodoList(props) {
  const dispatch = useDispatch();
  const [currentItem, setCurrentItem] = useState("");

  const todos = useSelector((state) => state.items);

  const handleInput = (e) => {
    setCurrentItem(e.target.value);
  };
  const resetValue = () => {
    setCurrentItem("");
  };

  return (
    <div className="todoMain">
      <h1>todos</h1>
      <div className="todoForm">
        <form onSubmit={resetValue}>
          <div onClick={() => props.completeAllItems()}>
            <img src={expand} alt="expand" className="toggleList" />
          </div>
          <input
            className="newTodo"
            placeholder="What needs to be done?"
            ref={props.inputElement}
            value={currentItem}
            onChange={(e) => handleInput(e)}
          />
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TODO",
                text: currentItem,
                id: Date.now(),
                completed: false,
                edit: false,
              })
            }
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoList;
