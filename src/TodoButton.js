import React from "react";

// class TodoButton extends React.Component{
//     render(){
//         return(
//             <a href="#/" onClick={this.props.handleShow}>{this.props.buttonText}</a>              
//         )
//     }
// }

function TodoButton(props){
    return(
        <a href="#/" onClick={props.handleShow}>{props.buttonText}</a>
    )
}

export default TodoButton