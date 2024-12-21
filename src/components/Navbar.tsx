import React from 'react';
import { FaBell } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  onNotificationClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNotificationClick }) => {
  return (
    <nav className="navbar-container">
      <a href="https://kognit.com.br/" target="_blank">
        <img style={{ width: '130px'}} src='/kognit-logo.png' alt="Logo da Kognit" />
      </a>
      <button className='navbar-button' onClick={onNotificationClick}>
        <FaBell />
      </button>
    </nav>
  );
};

export default Navbar;
