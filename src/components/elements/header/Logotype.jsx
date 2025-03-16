import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../../contexts/DarkModeContext'


export const Logotype = () => {
    const { darkMode } = useContext(DarkModeContext);


    return (
        <Link to="/" className="logotype">
            <img src="/images/header/SiliconLogo.svg" alt="Silicon Inc." />
            <span>
                Silicon
            </span>
        </Link>
    )
}


export default Logotype
