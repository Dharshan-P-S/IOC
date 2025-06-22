// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          SSR Explained
        </div>
        <nav className="main-nav">
          <NavLink to="/">Overview</NavLink>
          <NavLink to="/benefits-and-tradeoffs">Benefits & Trade-offs</NavLink>
          <NavLink to="/when-to-use">When to Use</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;