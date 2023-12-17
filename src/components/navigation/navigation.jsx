import { NavLink } from "react-router-dom";
import React from "react";
import "./navigation.css"

function Navigation() {
    return (
        <nav>
            <h3>Blogventure</h3>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/allposts"
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    >All Posts</NavLink>
                    </li>
                <li>
                    <NavLink
                        to="/newpost"
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    >New Post</NavLink>
                    </li>
            </ul>
        </nav>

    )
}

export default Navigation