import React, { useState } from 'react'

function HookCounterThree() {

    const initialName = ""
    const [name, setName] = useState(initialName)
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([ ...items, {
            id: items.length,
            name: name
        }])
        setName(initialName)
    }



    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
            <button onClick={addItem}>Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => 
                            (<tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>)
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HookCounterThree