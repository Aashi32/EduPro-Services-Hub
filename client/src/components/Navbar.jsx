import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './Navbar.css';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header2">
      <div className="container7">
      <div className="logo-brand">
          <NavLink to="/">
            <img src="/images/logo1.jpg" alt="Aashi Ansari Logo" />
          </NavLink>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {isLoggedIn ? (
              <li><NavLink to="/logout">Logout</NavLink></li>
            ) : (
              <>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

