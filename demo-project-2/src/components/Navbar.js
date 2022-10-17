import React from 'react'
import Home from './Home';
import About from './About';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className='nav-link' to="about">About</Link>
                </li>
                <li class="nav-item">
                    <Link className='nav-link' to="product">Product</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar