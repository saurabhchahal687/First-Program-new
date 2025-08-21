import React, {useState} from 'react';
import  PropsLearning  from './propsLearning';

export const MyFirstComponent = () => {
    
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (value) =>{
        setInputValue(value);
    }
    console.log(`Input Value is :${inputValue}` );
    return(
        <div className='first_component__container'>
            <h1>Hello, this is first component</h1>
            <p>Welcome to react application</p>
            <input type='text' value={inputValue} onChange={(e) => handleInputChange(e.target.value)}/>
            <h4><PropsLearning inputValue={inputValue}/></h4>
        </div>
    )
}

export const MySecondComponent = () => {
    return(
        <div className='second_component__container'>
            <h1>This is second component</h1>
        </div>
    )
}


/*state and props

state =>

import {useState} from 'react';
inport PropsLearning from './PropsLearning';

const [inputValue, setInputValue] = useState("");
const handleInputChange = (value) =>{
    setInputValue(value);
}

    <input type='text' value={inputValue} onChange={(e) => handleInputChange(e.target.value)}>

<h4>
    <PropsLearning inputValue={inputValue}/>
</h4>

function PropsLearning(props){
    return(
    <div>
        <h2>show input value here:</h2>
        <h3>{props.inputValue}</h3>
    </div>
    )
}

*/