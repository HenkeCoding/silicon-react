import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
        <NavLink to="#features-section" className="navigation-link">Features</NavLink>
        <NavLink to="#faq-section" className="navigation-link">Contacts</NavLink>
        
    </nav>
  )
}

export default MainNavigation
