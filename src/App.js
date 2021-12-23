import React from "react";
import './style.css';
import TodoList from './TodoList';
import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";
import './todoListStyle.css';
import { useState } from "react";

function App(){
  // constructor(){
  //   super()
  //   this.state={
  //     items:[],
  //     currentItem:{text:'', id:'', completed: false, edit: false},
  //     itemToShow:"all",
  //   }
  // }
  const [items, setItem] = useState([])
  const [currentItem, setCurrentItem] = useState({text:'', id:'', completed: false, edit: false})
  const [itemToShow, setItemToShow] = useState(["all"])

  const handleInput = e =>{
    const itemText = e.target.value
    //const currentItem = { text :itemText, id: Date.now(), completed: false, edit: false }//Date.now() returns the number of milliseconds
    setCurrentItem({ text :itemText, id: Date.now(), completed: false, edit: false })
    //this.setState({ currentItem, })//update the state from previous to new value when new item is triggered
    console.log("Hello new item.");
  }
  const addItem = e =>{
    e.preventDefault();
    const newItem = currentItem
    if(newItem.text !== ''){
      console.log("new item enters")
      const itemss = [...items, newItem]
      // this.setState({
      //   items: items,
      //   currentItem: { text: '', id:'', completed: false, edit: false},
      //   itemToShow:"all",
      // })
      setItem(itemss)
      setCurrentItem({ text: '', id:'', completed: false, edit: false})
      setItemToShow("all")
    }
    console.log("Hello item!");
  }
  const deleteItem = id =>{
    const filteredItems = items.filter(item => {//traverse items array, remove id, group remaining data in filtereditems array
      return item.id !== id//removed the particular id on clicking
    })
    // this.setState({
    //   items: filteredItems,//updated the items array
    // })
    setItem(filteredItems)
  }
  const completeItem = id => {
  const mapItems = items.map(item => {
    return item.id === id ?{...item, completed: !item.completed} : item
  })
  console.log(mapItems)
  // this.setState({
  //   items:mapItems,
  // })
  setItem(mapItems)
   }

   const handleAll = (itemState) => {
    // this.setState({
    //   itemToShow: itemState
    // })
    setItemToShow(itemState)
   }

   const handleActive = (itemState) => {
    // this.setState({
    //   itemToShow: itemState
    // })
    setItemToShow(itemState)
   }

   const handleCompleted = (itemState) => {
    // this.setState({
    //   itemToShow: itemState
    // })
    setItemToShow(itemState)
   }

   const editItem = (id) => {

     console.log(currentItem.edit)
     const updateItemState = items.map(item => {
       return item.id===id ? {...item, edit: true}:item
     });

    //  this.setState({
    //    items: updateItemState,
    //  })
    setItem(updateItemState)
     console.log(items)
   }

   const updateChange= (e, id) =>{
     const newItem = e.target.value
     console.log(newItem)
     const updateItem = items.map(item => {
       return item.id === id ? {...item, text: newItem}: item
     })

    //  this.setState({
    //    items: updateItem
    //  })
    setItem(updateItem)
  }

  const handleUpdatedDone= (e, id) =>{
    if(e.keyCode === 13){
    const updateListItem = items.map(item => {
      return item.id === id ? {...item, edit: false} : item
    })
  //   this.setState({
  //    items: updateListItem
  //  })
  setItem(updateListItem)
   } 
  }

  const clearCompletedItems = () =>{
    const activeItems = items.filter(item => item.completed === false)
    console.log(activeItems)
    // this.setState({
    //   items:activeItems
    // })
    setItem(activeItems)
  }

  const completeAllItems = () =>{
    const changeItemState = items.map(item => {
      return item.completed === false ? {...item, completed: true}:{...item, completed: false} 
    } )
    console.log(changeItemState)
    // this.setState({
    //   items:changeItemState
    // })
    setItem(changeItemState)
  }

  
    let filterItems = [];
    if(itemToShow === "all"){
      filterItems=items
    }
    else if(itemToShow === "active"){
      filterItems = items.filter(item => !item.completed)
    }
    else if(itemToShow === "completed"){
      filterItems = items.filter(item => item.completed)
    }
    
    return (
    <div className="todoApp">
      
      <TodoList 
      addItem = {addItem}//handle click on add
      currentItem = {currentItem}//display value of the state set to current item
      handleInput = {handleInput}//handle data in input field on change
      //inputElement = {inputElement}//refer to particular element 
      completeAllItems={completeAllItems}
      todoEntry = {items}
      />
      <div>
      {
      filterItems.map((item) => {
        return (<TodoItem key={item.id}
        entries={item} 
        deleteItem={deleteItem} 
        completeItem={completeItem} 
        
        editItem={editItem}
        updateChange={updateChange}
        handleUpdatedDone={handleUpdatedDone}
        />)

      })
      }
      </div>

      <div className="buttonsDiv">
                <div className="itemCount">{items.filter(item => !item.completed).length} item left</div>
                <ul className="itemStatus">
                    <TodoButton handleShow={()=>handleAll("all")} buttonText={"All"} />
                    <TodoButton handleShow={()=>handleActive("active")} buttonText={"Active"} />
                    <TodoButton handleShow={()=>handleCompleted("completed")} buttonText={"Completed"} />
                </ul>
                
                
                <div className={items.filter(item => item.completed).length > 0 ? "completedCount":"allActive"}
                onClick={() => clearCompletedItems()}>Clear Completed</div>
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
