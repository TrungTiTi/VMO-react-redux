import React, { useState } from 'react';

const FunctionNomal: React.FC = () => {

    const [count, setCount]= useState<number>(0)

    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count -1)
    }
    return (
        <div>
            <h1>This is function nomal component</h1>
            <p> Count {count}</p>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    );
};

export default FunctionNomal;