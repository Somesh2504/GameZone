import React, { useState, useEffect, useRef } from 'react';
import './menu.css'; // Import the CSS file for styles
import img from './menu2.jpg'; // Import the image file for the menu icon
import {Link} from 'react-router-dom';
const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // Create a ref for the dropdown menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when clicking outside of it
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener to handle clicks outside the menu
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="menu-container">
            <img 
                src={img}
                alt="Menu Icon" 
                className="menu-icon" 
                onClick={toggleMenu} 
            />
            <div className={`dropdown-menu ${isOpen ? 'active' : ''}`} ref={menuRef}>
            <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/RPS">RPS</Link></li>
            <li><Link to="/TTT">TTT</Link></li>
            <li><Link to="/Snake">Snake</Link></li>
            </ul>
            </div>
        </div>
    );
};

export default MenuBar;