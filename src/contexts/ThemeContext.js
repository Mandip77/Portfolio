import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const toggleTheme = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);

    // Prevent hydration mismatch or unwanted flashing by waiting for mount if needed.
    // However, for the context to be available to children, we MUST wrap them in Provider.
    // If we want to hide content until theme is loaded, we should return null or a loader, 
    // BUT since we default to 'dark', we can just render immediately.

    // The previous bug was returning {children} WITHOUT the Provider wrapper when !isMounted,
    // causing useContext(ThemeContext) in children to return undefined and crash.

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
