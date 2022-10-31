import React from 'react';
import useLocalStorage from 'use-local-storage'
import "./index.css"



function App() {

const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme)
}

  return(
    <div className="app" data-theme={theme}>
      <div className='login'>
        <h1> Login</h1>
        <div className='container'>
          <div className='top'>
          </div>
        </div>
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <i onClick={switchTheme}class='fas fa-toggle-on'></i>
        </div>
      </div>
     </div>
  );
}
