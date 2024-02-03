import React, { useState, useEffect } from 'react';
import {SITE_NAME} from "../config";
import changeTheme from './changeTheme';
import {ReactComponent as Logo} from "../icons/logo.svg";
import {ReactComponent as AppIcon} from "../icons/appIcon.svg";
import {ReactComponent as Notification} from "../icons/notification.svg";
import {ReactComponent as DarkThemeIcon} from "../icons/DarkThemeIcon.svg";
import {ReactComponent as LightThemeIcon} from "../icons/LightThemeIcon.svg";

const Header = () => {
    
    // Retrieve the theme preference from localStorage on component mount
    const storedTheme = localStorage.getItem('darkTheme');
    const initialTheme = storedTheme ? JSON.parse(storedTheme) : false;

    const [darkTheme, setDarkTheme] = useState(initialTheme);

    const handleThemeChange = (e) => {
        e.preventDefault();
        setDarkTheme((prevTheme) => !prevTheme);
    };

    useEffect(() => {
        // Call the changeTheme function
        changeTheme(darkTheme, setDarkTheme);

        // Save the current theme preference to localStorage
        localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    }, [darkTheme]);
    
    return (
        <div className={`header ${darkTheme ? 'dark-theme' : ''}`}>
            <div className="leftSide">
                <ul>
                    <li><a href="/"><Logo /></a></li>
                    <li><a href="/" className="websiteName">{SITE_NAME}</a></li>
                    <li><a href="/">Intelligence</a></li>
                    <li><a href="/">Hunting</a></li>
                    <li><a href="/">Graph</a></li>
                    <li><a href="/">API</a></li>
                </ul>
            </div>
            <div className="rightSide">
                <ul>
                    <li><a href="/"><AppIcon /></a></li>
                    <li><a href="/"><Notification /></a></li>
                    <li><a href="/" onClick={handleThemeChange}>{darkTheme ? <LightThemeIcon /> : <DarkThemeIcon />}</a></li>
                    <li><a href="/">Sign in</a></li>
                    <li><a href="/" className='rounded-pill'>Sign Up</a></li>
                </ul> 
            </div>
        </div>
    );
};

export default Header;