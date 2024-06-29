// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header: React.FC = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
