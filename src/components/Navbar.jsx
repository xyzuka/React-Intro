import React from 'react';
import logo from '../assets/react.svg';

export default function NavBar() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="react-logo" className='logo' />
        <h1 className='logo-text'>ReactFacts</h1>
        <h2 className='header-subtext'>React Course - Project 1</h2>
      </header>
    </div>
  );
}