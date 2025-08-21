import React from "react";

function PropsLearning(props){
    return(
        <div>
            <h2>show input value here:</h2>
            <h3>{props.inputValue}</h3>
        </div>
    )
}

export default PropsLearning;