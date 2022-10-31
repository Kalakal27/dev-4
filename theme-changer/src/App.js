import React, {useState} from 'react';
import './styles.css';
import Header from './header';
import Button from './Button';
import {themeContext} from "./themeContext"


function App() {

  const [color, setColor] = useState("dark")

  const toggleTheme = () => {
    setColor(prevColor => prevColor === "dark" ? "light" : "dark")
  }

  return (
    <themeContext value={{
      color: color,
        toggleTheme: toggleTheme
    }}>
      
     <Header/>
     <Button/>
   </themeContext>
  );
}

export default App;
