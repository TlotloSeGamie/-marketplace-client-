import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>BigSteppa</h1>
            </div>
            
            <div className="navbar-links">
                <a href="/new-release">NEW RELEASE</a>
                <a href="/brands">BRANDS</a>
                <a href="/men">MEN</a>
                <a href="/women">WOMEN</a>
                <a href="/kids">KIDS</a>
                <a href="/about-us">ABOUT US</a>
                <a href="/contact">CONTACT</a>
            </div>
            
            <div className="navbar-icons">
                <FaSearch className="icon" />
                <FaMapMarkerAlt className="icon" />
                <FaUser className="icon" />
                <div className="auth-links">
                    <a href="/login">Login</a>
                    <a href="/sign-up">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
