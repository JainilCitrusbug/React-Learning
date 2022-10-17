import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            {display && <HookMouse />}
            <button onClick={() => setDisplay(!display)}>Toggle Dispaly</button>
        </div>
    )
}

export default MouseContainer