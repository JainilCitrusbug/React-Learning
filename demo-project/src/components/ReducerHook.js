import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'rest':
            return initialState
        default:
            return state
    }
}

function ReducerHook() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count - ({count})</h1>
            <div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('rest')}>Rest</button>
            </div>
        </div>
    )
}

export default ReducerHook