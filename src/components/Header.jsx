import React, { useContext, useState } from 'react';
import ThemeContext from './context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div >
            <h1 style={{color}}>APP RICK AND MORTY</h1>
            <button onClick={handleClick}>{!darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    )
}

export default Header;