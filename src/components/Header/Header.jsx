import React from 'react'
import {NavLink} from "react-router-dom"

import './Header.scss';
export default function Header() {
    const links = ["accardion", "menu", "tabs" , "quiz-app", 'form']
    return (
        <header>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link} activeClassName="active">
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )
}
