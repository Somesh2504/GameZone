import React, { useState, useEffect, useRef } from 'react';
import './menu.css';
import img from './menu2.jpg';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="menu-container" ref={menuRef}>
      <img 
        src={img}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="dropdown-menu active">
          <ul>
            <li><Link to="/GameZone" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/GameZone/RPS" onClick={closeMenu}>RPS</Link></li>
            <li><Link to="/GameZone/TTT" onClick={closeMenu}>TTT</Link></li>
            <li><Link to="/GameZone/Snake" onClick={closeMenu}>Snake</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
