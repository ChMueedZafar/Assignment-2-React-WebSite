import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    const navMenuBtn = document.querySelector('.nav-menu-btn');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    const themeBtns = document.querySelectorAll('.theme-btn');

    const navToggleFunc = () => setIsNavActive(!isNavActive);

    navMenuBtn.addEventListener('click', navToggleFunc);
    navCloseBtn.addEventListener('click', navToggleFunc);

    themeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setIsLightTheme(!isLightTheme);
      });
    });

    return () => {
      navMenuBtn.removeEventListener('click', navToggleFunc);
      navCloseBtn.removeEventListener('click', navToggleFunc);
      themeBtns.forEach(btn => {
        btn.removeEventListener('click', () => {
          setIsLightTheme(!isLightTheme);
        });
      });
    };
  }, [isNavActive, isLightTheme]);

  useEffect(() => {
    document.body.classList.toggle('light-theme', isLightTheme);
    document.body.classList.toggle('dark-theme', !isLightTheme);
  }, [isLightTheme]);

  return (
    <div className={`App ${isNavActive ? 'active' : ''}`}>
      <h1>Hello</h1>
      <button className="nav-menu-btn">Menu</button>
      <button className="nav-close-btn">Close</button>
      <button className="theme-btn">Toggle Theme</button>
    </div>
  );
}

export default App;
