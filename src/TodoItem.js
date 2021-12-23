import React from "react";
import './todoItemStyle.css';
import cross from './assets/clear_black_24dp.svg';
import circle from './assets/circle_black_24dp.svg';
import filledCircle from './assets/check_black_24dp.svg';

// class TodoItem extends React.Component{
//     render () {
//         return(
//             this.props.entries.edit === false ? (
//         <div>
//         <div className="todoListItem">
        
//         <li className={this.props.entries.completed === false ? "" : "crossed-line"} >
//          <div className="typeList">
//         <div onClick = { () => this.props.completeItem(this.props.entries.id)}>
//             <img src={this.props.entries.completed?filledCircle:circle} alt="circle" className="todoCheckbox"/>

//         </div>
//             <p className="todoLabel" onDoubleClick={ () => this.props.editItem(this.props.entries.id) }>{this.props.entries.text}</p>
//             <div onClick={ () => this.props.deleteItem(this.props.entries.id)}>
//                 <img src={cross} alt="tickImage"className="deleteTodo"/>
//             </div>
//             </div>
//             </li>
//             </div>
//             </div>
//            ):(  
//             <div>
//             <input className="updateItemValue" type="text" value={this.props.entries.text} onChange={(e) => this.props.updateChange(e, this.props.entries.id)}
//             onKeyDown={ (e) => this.props.handleUpdatedDone(e, this.props.entries.id) }/>
//             </div>
//        )
//         );  
//     }
// }

function TodoItem(props){
        return(
            props.entries.edit === false ? (
        <div>
        <div className="todoListItem">
        
        <li className={props.entries.completed === false ? "" : "crossed-line"} >
         <div className="typeList">
        <div onClick = { () => props.completeItem(props.entries.id)}>
            <img src={props.entries.completed?filledCircle:circle} alt="circle" className="todoCheckbox"/>

        </div>
            <p className="todoLabel" onDoubleClick={ () => props.editItem(props.entries.id) }>{props.entries.text}</p>
            <div onClick={ () => props.deleteItem(props.entries.id)}>
                <img src={cross} alt="tickImage"className="deleteTodo"/>
            </div>
            </div>
            </li>
            </div>
            </div>
           ):(  
            <div>
            <input className="updateItemValue" type="text" value={props.entries.text} onChange={(e) => props.updateChange(e, props.entries.id)}
            onKeyDown={ (e) => props.handleUpdatedDone(e, props.entries.id) }/>
            </div>
       )
        );  
    }

export default TodoItem