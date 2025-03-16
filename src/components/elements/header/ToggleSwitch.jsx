import React from 'react'

const ToggleSwitch = ({ id, text, currentState, currentStateCallback }) => {
  return (
    <div className='toggle-switch'>

      <label className="switch-text" htmlFor={id}>{text}</label>


      <div className="switch-icon">

          <input type="checkbox" id={id} checked={currentState} onChange={currentStateCallback} />
          <label className="slider-image" htmlFor={id} />
      </div>

    </div>
  )
}

export default ToggleSwitch