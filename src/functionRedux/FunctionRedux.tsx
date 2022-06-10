import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDecrement, onIncrement } from './redux/actions/count';

const FunctionRedux: React.FC = () => {

    const state = useSelector((state:any) => state.count);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>This is function counter use Redux</h1>
            <p>Count {state.count}</p>
            <button onClick={() => dispatch(onIncrement())}>+</button>
            <button onClick={() => dispatch(onDecrement())}>-</button>
        </div>
    );
};

export default FunctionRedux;