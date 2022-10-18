import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom';


function AddUser() {

    const initialUser = {
        id : '',
        name : '',
        email : '',
        age : ''
    }

    const [user, setUser] = useState(initialUser)
    const [items, setItems] = useState([])

    const addUser = () => {
        setItems([...items, {...user, id:items.length}])
    }

    return (
        <div>
            <div>
                <div class="row">
                    <div class="col">
                        <label>Name:</label>
                        <input type="text" class="form-control" value={user.name} onChange={e => setUser({...user, name: e.target.value})} />
                    </div>
                    <div class="col">
                        <label>Email:</label>
                        <input type="email" class="form-control" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                    </div>
                    <div class="col">
                        <label>Age:</label>
                        <input type="number" class="form-control" value={user.age} onChange={e => setUser({...user, age: e.target.value})} />
                    </div>
                </div>
                <button class="btn btn-primary mt-2" onClick={addUser}>Add</button>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">View</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => 
                                (<tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td><button class="btn btn-primary">View</button></td>
                                </tr>)
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AddUser