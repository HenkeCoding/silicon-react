import React, { useContext } from 'react'
import Logotype from '../elements/header/Logotype'
import MainNavigation from '../elements/header/MainNavigation'
import ToggleSwitch from '../elements/header/ToggleSwitch'
import PurpleButton from '../elements/PurpleButton'

import { DarkModeContext } from '../../contexts/DarkModeContext'
import HamburgerButton from '../elements/header/HamburgerButton'

export const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    
    return (
        <header>
            <div className="container">
                <Logotype/>
                <MainNavigation/>
                <ToggleSwitch id="theme-switch" text="Dark Mode" currentState={darkMode} currentStateCallback={toggleDarkMode} />
                <PurpleButton url="/signin" text="Sign in / up" icon="bi bi-person" iconAfter="false" />
                <HamburgerButton/>
            </div>
        </header>
    )
}

export default Header
