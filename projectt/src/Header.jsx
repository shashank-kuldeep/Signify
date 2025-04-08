import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </nav>
    );
};

export default Header;