import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
        <NavLink to="features" className="navigation-link">Features</NavLink>
        <NavLink to="contact" className="navigation-link">Contacts</NavLink>
        
    </nav>
  )
}

export default MainNavigation
