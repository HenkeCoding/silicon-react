import React from 'react'
import { Link } from 'react-router-dom'


const PurpleButton = ({url, text, after, icon}) => {
  
    if (after) {
        return(
            <Link to={url} className={`btn purple-button`} > 
                {text} 
                <i className={icon}></i>
            </Link>
        )
    }
    else{
        return(
            <Link to={url} className={`btn purple-button`} > 
                <i className={icon}></i>
                {text}
            </Link>
        )
    }

}

export default PurpleButton
