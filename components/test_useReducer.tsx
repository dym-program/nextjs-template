import React, { useReducer  } from 'react';

const initValue = { count: 0};
type Action = { type: 'inc' } | { type: 'dec' };


function reduce(state: typeof  initValue, action: Action){
    switch (action.type) {
        case "inc":
            return {count: state.count + 1 };
        case "dec":
            return {count: state.count - 1 };

        default:
            return state
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reduce, initValue);
    

    return (
        <div>
            useReducer
            <button onClick={() => dispatch({type:"inc"})}>++</button>
            <button onClick={() => dispatch({type:"dec"})}>--</button>: {state.count}
        </div>
    );

}