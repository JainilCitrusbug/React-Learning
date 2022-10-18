import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
                <button class="btn btn-outline-success" type="button">
                    <Link to='/'>Home</Link>
                </button>
                <button class="btn btn-outline-success" type="button">
                    <Link to='user'>Add User</Link>
                </button>
            </form>
        </nav>
    )
}

export default Navbar