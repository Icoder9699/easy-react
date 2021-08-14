import React from 'react'

import './Header.scss';
export default function Header() {
    const links = ["accardion"]
    return (
        <header>
            <ul>
                {links.map(link => (
                    <li>
                        {link}
                    </li>
                ))}
            </ul>
        </header>
    )
}
