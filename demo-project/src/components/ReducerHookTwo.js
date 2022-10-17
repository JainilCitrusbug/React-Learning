import React, { useReducer } from 'react'

const initialState = {
    firstcounter: 0,
    secondcounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstcounter: state.firstcounter + action.value }
        case 'decrement':
            return { ...state, firstcounter: state.firstcounter - action.value }
        case 'increment2':
            return { ...state, secondcounter: state.secondcounter + action.value }
        case 'decrement2':
            return { ...state, secondcounter: state.secondcounter - action.value }
        case 'rest':
            return initialState
        default:
            return state
    }
}

function ReducerHookTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>First Count - ({count.firstcounter})</h1>
            <h1>Second Count - ({count.secondcounter})</h1>
            <div>
                <div>
                    <button onClick={() => dispatch({type:'increment', value : 1})}>Increment</button>
                    <button onClick={() => dispatch({type:'decrement', value : 1})}>Decrement</button>
                    <button onClick={() => dispatch({type:'increment', value : 5})}>Increment by 5</button>
                    <button onClick={() => dispatch({type:'decrement', value : 5})}>Decrement by 5</button>
                </div>
                <div>
                    <button onClick={() => dispatch({type:'increment2', value : 1})}>Increment Counter 2</button>
                    <button onClick={() => dispatch({type:'decrement2', value : 1})}>Decrement Counter 2</button>
                    <button onClick={() => dispatch({type:'increment2', value : 5})}>Increment Counter 2 by 5</button>
                    <button onClick={() => dispatch({type:'decrement2', value : 5})}>Decrement Counter 2 by 5</button>
                </div>
                <button onClick={() => dispatch({type:'rest'})}>Rest</button>
            </div>
        </div>
    )
}

export default ReducerHookTwo