import React, { useReducer } from "react";


enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
  }
  
  // An interface for our actions
  interface CountAction {
    type: CountActionKind;
    payload: number;
  }
  
  // An interface for our state
  interface CountState {
    count: number;
  }
  
  // Our reducer function that uses a switch statement to handle our actions
  function counterReducer(state: CountState, action: CountAction) {
    // const { type, payload } = action;
    switch (action.type) {
      case CountActionKind.INCREASE:
        return {
          ...state,
          count: state.count + 1,
        };
      case CountActionKind.DECREASE:
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  }
  
  const FunctionReducer: React.FC = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
      <div>
          <h1>This is function use useReducer</h1>
        <p>Count: {state.count}</p>
        
        <button onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 0 })}>+</button>
        <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 0 })}>-</button>
      </div>
    );
  };

export default FunctionReducer;