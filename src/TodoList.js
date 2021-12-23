import React from "react";
import './todoListStyle.css';
import expand from './assets/expand_more_black_24dp.svg';

// class TodoList extends React.Component{
//     updateItemComponent(){
//         this.props.inputElement.current.focus()//set focus in input area so user can continue typing the next todo
//     }
//     render(){
//         return(
//             <div className="todoMain">
//                 <h1>todos</h1>
//                 <div className="todoForm">
//                     <form onSubmit={this.props.addItem}>
//                     <div onClick={() => this.props.completeAllItems()}>
//                     <img src={expand} alt="expand" className="toggleList"/>
//                     </div>
//                     <input className="newTodo" placeholder="What needs to be done?" ref={this.props.inputElement} 
//                     value={this.props.currentItem.text} onChange={this.props.handleInput}/>
//                     </form>
//                 </div>
//             </div>
//         )
//     }

// }

function TodoList(props){
    // updateItemComponent(){
    //     props.inputElement.current.focus()//set focus in input area so user can continue typing the next todo
    // }
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