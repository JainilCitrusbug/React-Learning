import React, { useState } from 'react'

function HookCounter() {

    const initialCount = 0
    const [count, setCount] = useState(0)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={() => setCount(initialCount)}>Rest</button>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
                <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
                <button onClick={incrementFive}>Increment 5</button>
            </div>
        </div>
    )
}

export default HookCounter