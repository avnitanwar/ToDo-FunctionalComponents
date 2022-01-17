import React from "react";
import "./todoItemStyle.css";

import cross from "./assets/clear_black_24dp.svg";
import circle from "./assets/circle_black_24dp.svg";
import filledCircle from "./assets/check_black_24dp.svg";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function TodoItem(props) {
  const todos = useSelector((state) => state.items);
  const todoValue = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const updateChange = (value, id) => {
    dispatch({ type: "EDIT_VALUE", payload: value, id: id });
  };

  const handleUpdateValue = (e, id) => {
    if (e.keyCode === 13) {
      dispatch({ type: "FINAL_VALUE", payload: id });
    }
  };
  console.log(props.entries.id);
  return props.entries.edit === false ? (
    <div>
      <div className="todoListItem">
        <li className={props.entries.completed === false ? "" : "crossed-line"}>
          <div className="typeList">
            <div
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: props.entries.id })
              }
            >
              <img
                src={props.entries.completed ? filledCircle : circle}
                alt="circle"
                className="todoCheckbox"
              />
            </div>
            <p
              className="todoLabel"
              onDoubleClick={() =>
                dispatch({
                  type: "EDIT_TODO",
                  payload: props.entries.id,
                })
              }
            >
              {props.entries.text}
            </p>
            <div
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: props.entries.id,
                })
              }
            >
              <img src={cross} alt="tickImage" className="deleteTodo" />
            </div>
          </div>
        </li>
      </div>
    </div>
  ) : (
    <div>
      <input
        className="updateItemValue"
        type="text"
        value={props.entries.text}
        onChange={(e) => updateChange(e.target.value, props.entries.id)}
        onKeyDown={(e) => handleUpdateValue(e, props.entries.id)}
      />
    </div>
  );
}

export default TodoItem;
