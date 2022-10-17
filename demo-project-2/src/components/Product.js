import React from 'react'
import { Link,Outlet } from 'react-router-dom';

function Product() {
    return (
        <div>
            Prduct
            <nav>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <Link className='nav-link' to="featured">Featured</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to="new">New</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Product