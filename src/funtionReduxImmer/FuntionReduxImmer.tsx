import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDecreImmer, onIncreImmer } from '../functionRedux/redux/actions/count';

const FuntionReduxImmer: React.FC = () => {
    const states = useSelector((states:any) => states.counter);
    const dispatch = useDispatch()

    
    return (
        <div >
            <h1>This is function counter use Redux Immer</h1>
            <p>Count {states.counter}</p>
            <button onClick={() => dispatch(onIncreImmer())}>+</button>
            <button onClick={() => dispatch(onDecreImmer())}>-</button>
        </div>
    );
};

export default FuntionReduxImmer;