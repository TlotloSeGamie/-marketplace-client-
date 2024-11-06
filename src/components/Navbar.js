import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import './Navbar.css';
import Login from './Login';

const Navbar = () => {
    const [isLoginVisible, setIsLoginVisible] = useState(false); // State to manage login form visibility

    const toggleLoginForm = () => {
        setIsLoginVisible(!isLoginVisible); // Toggle the login form visibility
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>BigSteppa</h1>
            </div>
            
            <div className="navbar-links">
                <a href='/'>HOME</a>
                <a href="/new-release">NEW RELEASE</a>
                <div className="brands-container">
                    <a href="/brands">BRANDS</a>
                    <div className="brands-dropdown">
                        <a href="/brands/nike">Nike</a>
                        <a href="/brands/adidas">Adidas</a>
                        <a href="/brands/puma">Puma</a>
                        <a href="/brands/reebok">Reebok</a>
                        <a href="/brands/new-balance">New Balance</a>
                        <a href="/brands/asics">ASICS</a>
                        <a href="/brands/vans">Vans</a>
                        <a href="/brands/converse">Converse</a>
                        <a href="/brands/fila">Fila</a>
                        <a href="/brands/jordan">Jordan</a>
                        <a href="/brands/balenciaga">Balenciaga</a>
                    </div>
                </div>
                <a href="/men">MEN</a>
                <a href="/women">WOMEN</a>
                <a href="/kids">KIDS</a>
                <a href="/about-us">ABOUT US</a>
                <a href="#">CONTACT</a>
            </div>

            <div className="navbar-icons">
                <FaSearch className="icon" />
                <FaMapMarkerAlt className="icon" />
                <div className="auth-links">
                    <FaUser className="icon" onClick={toggleLoginForm} /> {/* Toggle login form on click */}
                    <a href="#" onClick={toggleLoginForm}>Login</a> {/* Toggle login form on click */}
                </div>
            </div>

            {isLoginVisible && (
                <div className="login-popup"> {/* Popup for login form */}
                    {/* Place your Login component here */}
                    <Login toggleLoginForm={toggleLoginForm} /> {/* Pass the toggle function */}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
