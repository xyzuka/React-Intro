import React from 'react';
import logo from '../assets/react.svg';

export default function NavBar(props) {
  return (
    <div>
      <nav className={props.darkMode ? "dark" : ""}>
        <img src={logo} alt="react-logo" className='logo' />
        
        <h1 className='logo-text'>ReactFacts</h1>
        
        <div className="toggle">
          <p className="toggle-light">Light</p>
          <div 
            className="toggle-slider"
            onClick={props.toggleDarkMode}
          >
            <div className="toggle-slider-circle"></div>
          </div>
          <p className="toggle-dark">Dark</p>

        </div>
      </nav>
    </div>
  );
}