import React from "react";
import { useState } from "react";

import "./style.css";
import "./todoListStyle.css";

import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [itemToShow, setItemToShow] = useState("all");

  let filterItems = [];
  if (itemToShow === "all") {
    filterItems = todos;
  } else if (itemToShow === "active") {
    filterItems = todos.filter((item) => !item.completed);
  } else if (itemToShow === "completed") {
    filterItems = todos.filter((item) => item.completed);
  }

  return (
    <div className="todoApp">
      <TodoList />
      <div>
        {filterItems.map((item) => {
          return <TodoItem key={item.id} entries={item} />;
        })}
      </div>

      <div className="buttonsDiv">
        <div className="itemCount">
          {todos.filter((item) => !item.completed).length} item left
        </div>
        <ul className="itemStatus">
          {/* <TodoButton handleShow={() => handleAll("all")} buttonText={"All"} /> */}
          <TodoButton
            handleShow={() => setItemToShow("all")}
            buttonText={"All"}
          />
          <TodoButton
            handleShow={() => setItemToShow("active")}
            buttonText={"Active"}
          />
          <TodoButton
            handleShow={() => setItemToShow("completed")}
            buttonText={"Completed"}
          />
        </ul>

        <div
          className={
            todos.filter((item) => item.completed).length > 0
              ? "completedCount"
              : "allActive"
          }
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        >
          Clear Completed
        </div>
      </div>

      <footer className="todoAppInfo">
        <p>Double-click to edit a todo</p>
        <p>Created by petehunt</p>
        <p>Part of todoMVC</p>
      </footer>
    </div>
  );
}

export default App;
