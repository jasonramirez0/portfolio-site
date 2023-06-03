import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
          <h1>Jason Ramirez</h1>
          <p>Full-Stack Software Engineer</p>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
