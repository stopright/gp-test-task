import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg bg-light">
       <ul className="navbar-nav mr-auto">
           <li className="navbar-brand nav-item">
               <Link to="/" className="nav-link text-primary">Главная страница</Link>
           </li>
            <li className="nav-item navbar-brand">
                <Link to="/about" className="nav-link text-primary">О сайте</Link>
            </li>
       </ul>
</nav>
    )
}

export default Navbar