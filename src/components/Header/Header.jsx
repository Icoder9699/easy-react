import React from 'react'
import {NavLink} from "react-router-dom"

import './Header.scss';
export default function Header() {
    const links = ["accardion"]
    return (
        <header>
            <ul>
                {links.map(link => (
                    <li>
                        <NavLink to="/accardion" activeClassName="active">
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )
}
