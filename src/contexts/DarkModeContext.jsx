import { useEffect, useState, createContext } from 'react';

export const DarkModeContext = createContext({

});

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' ? true : false);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        darkMode
            ? document.documentElement.classList.toggle('data-theme', darkMode ? 'dark' : 'light')
            : document.documentElement.removeAttribute('data-theme')

    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(currentState => !currentState);

        
        let themeMode = localStorage.getItem('theme');
        let appStoreImage = document.getElementById('app-store-image');
        let googlePlayImage = document.getElementById('google-play-image');
    
    
        if (themeMode === 'light') {
            appStoreImage.src = "images/hero/appstore-light.svg"
            googlePlayImage.src = "images/hero/googleplay-light.svg"
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark')
        }
        if (themeMode === 'dark') {
            appStoreImage.src = "images/hero/appstore-dark.svg"
            googlePlayImage.src = "images/hero/googleplay-dark.svg"
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
        }
    }


    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
