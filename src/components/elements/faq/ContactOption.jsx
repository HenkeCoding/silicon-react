import React from 'react'
import { Link } from 'react-router-dom'

const ContactOption = ({ icon, text, uri, linkText, color }) => {
    return (
        <div className={`contact-option contact-option-${color}`}>
            <img src={icon} />
            <p>{text}</p>
            <Link to={uri}>{linkText}<i className="bi bi-arrow-right"></i></Link>
        </div>
    )
}

export default ContactOption