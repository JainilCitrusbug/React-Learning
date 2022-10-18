import React from 'react'
import { Link,Outlet,useParams } from 'react-router-dom';

function UserDetail() {

    const params = useParams()
    console.log(params);
    const id = params.userID

    return (
        <div>
            User {id} Details
        </div>
    )
}

export default UserDetail