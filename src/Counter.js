import React, { useState } from 'react';

const Counter=()=>{
    const [number,setNumber]=useState(5);
    const increment=()=>{
        setNumber(number+1);
    }
    const decrement=()=>{
        if(number==0){
            return;
        }
        setNumber(number-1);
    }
return (
    <div className='container'>
        <h1>{number}</h1>
        <button className='px-3' onClick={increment}>+</button>
        <button className='px-3 mx-2' onClick={decrement}>-</button>
    </div>
)
}
export default Counter;