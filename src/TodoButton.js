import React from "react";

function TodoButton(props){
    return(
        <a href="#/" onClick={props.handleShow}>{props.buttonText}</a>
    )
}

export default TodoButton