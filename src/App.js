import React from "react";
import "./style.css";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";
import "./todoListStyle.css";
import { useState } from "react";

import addTodo from "./redux/action/actionIndex";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.items);
  const dispatch = useDispatch();
  console.log(todos);
  const [items, setItem] = useState([]);
  // const [currentItem, setCurrentItem] = useState({
  //   text: "",
  //   id: "",
  //   completed: false,
  //   edit: false,
  // });
  const [itemToShow, setItemToShow] = useState("all");
  console.log(itemToShow);
  // const handleInput = e =>{
  //   const itemText = e.target.value
  //   setCurrentItem({ text :itemText, id: Date.now(), completed: false, edit: false })
  //   console.log("Hello new item.");
  // }
  // const addItem = e =>{
  //   e.preventDefault();
  //   // const newItem = currentItem
  //   // if(newItem.text !== ''){
  //   //   console.log("new item enters")
  //   //   const itemss = [...items, newItem]
  //   //   setItem(itemss)
  //   //   setCurrentItem({ text: '', id:'', completed: false, edit: false})
  //   //   setItemToShow("all")
  //   // }
  //   // console.log("Hello item!");
  //     addTodo(currentItem.text)
  //     setCurrentItem({ text: '', id:'', completed: false, edit: false})
  // }
  // const deleteItem = (id) => {
  //   const filteredItems = items.filter((item) => {
  //     //traverse items array, remove id, group remaining data in filtereditems array
  //     return item.id !== id; //removed the particular id on clicking
  //   });
  //   setItem(filteredItems);
  // };
  const completeItem = (id) => {
    const mapItems = items.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    console.log(mapItems);
    setItem(mapItems);
  };

  const handleAll = (itemState) => {
    setItemToShow(itemState);
  };

  const handleActive = (itemState) => {
    setItemToShow(itemState);
  };

  const handleCompleted = (itemState) => {
    setItemToShow(itemState);
  };

  const editItem = (id) => {
    const updateItemState = items.map((item) => {
      return item.id === id ? { ...item, edit: true } : item;
    });

    setItem(updateItemState);
    console.log(items);
  };

  const updateChange = (e, id) => {
    const newItem = e.target.value;
    console.log(newItem);
    const updateItem = items.map((item) => {
      return item.id === id ? { ...item, text: newItem } : item;
    });

    setItem(updateItem);
  };

  const handleUpdatedDone = (e, id) => {
    if (e.keyCode === 13) {
      const updateListItem = items.map((item) => {
        return item.id === id ? { ...item, edit: false } : item;
      });
      setItem(updateListItem);
    }
  };

  const clearCompletedItems = () => {
    const activeItems = items.filter((item) => item.completed === false);
    console.log(activeItems);

    setItem(activeItems);
  };

  const completeAllItems = () => {
    const changeItemState = items.map((item) => {
      return item.completed === false
        ? { ...item, completed: true }
        : { ...item, completed: false };
    });
    console.log(changeItemState);
    setItem(changeItemState);
  };

  let filterItems = [];
  if (itemToShow === "all") {
    filterItems = todos;
  } else if (itemToShow === "active") {
    filterItems = todos.filter((item) => !item.completed);
  } else if (itemToShow === "completed") {
    filterItems = todos.filter((item) => item.completed);
  }

  console.log(JSON.stringify(filterItems) + "filteredItems");
  console.log(todos);

  return (
    <div className="todoApp">
      <TodoList
        //addItem={addItem} //handle click on add
        //currentItem={currentItem} //display value of the state set to current item
        // handleInput={handleInput} //handle data in input field on change
        //inputElement = {inputElement}//refer to particular element
        completeAllItems={completeAllItems}
        //todoEntry={items}
      />
      <div>
        {filterItems.map((item) => {
          return (
            <TodoItem
              key={item.id}
              // entries={todoValues}
              entries={item}
              //deleteItem={deleteItem}
              completeItem={completeItem}
              //editItem={editItem}
              updateChange={updateChange}
              handleUpdatedDone={handleUpdatedDone}
            />
          );
        })}
      </div>

      <div className="buttonsDiv">
        <div className="itemCount">
          {todos.filter((item) => !item.completed).length} item left
        </div>
        <ul className="itemStatus">
          <TodoButton handleShow={() => handleAll("all")} buttonText={"All"} />
          <TodoButton
            handleShow={() => handleActive("active")}
            buttonText={"Active"}
          />
          <TodoButton
            handleShow={() => handleCompleted("completed")}
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
