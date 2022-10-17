import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Moouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Unmounting Code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            <h1>Hook X - {x}, Y - {y}</h1>
        </div>
    )
}

export default HookMouse