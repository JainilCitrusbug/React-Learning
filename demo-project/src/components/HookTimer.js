import React, { useState, useEffect } from 'react'

function HookTimer() {

    const [count, setCount] = useState(1)
    const [countTwo, setCountTwo] = useState(5)

    const tick = () => {
        if (countTwo === 1) {
            setCount(0)
            setCountTwo(6)
        }
        setCount(prevCount => prevCount + 1);
        setCountTwo(prevCount => prevCount - 1)
    }

    useEffect(() => {
        if (count !== countTwo) {
            const interval = setInterval(tick, 1000)
            return () => {
                clearInterval(interval)
            }
        } else {
            const interval = setInterval(tick, 10000)
            return () => {
                clearInterval(interval)
            }
        }
    })

    return (
        <div>
            First: {count}
            Second: {countTwo}
        </div>
    )
}

export default HookTimer