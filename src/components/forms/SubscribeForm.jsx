import React, { useState } from 'react'


const SubscribeForm = () => {
    const apiUri = 'https://kyhn24.azurewebsites.net/api/subscribe'
    const [formData, setFormData] = useState({ email: '' })
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')


    const handleChange = async (e) => {
        setFormData({ email: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.email) {
            setMessage('Please enter your email')
            setMessageType('empty')
            return
        }

        const res = await fetch(apiUri, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (!res.ok) {
            setMessage('Please write in the format: x@x.x')
            setMessageType('error')
        }

        if (res.ok) {
            setMessage('You are now subscribed!')
            setMessageType('success')
        }

        setFormData({ email: '' })
    }


    return (
        <form onSubmit={handleSubmit}>
            <i className="bi bi-envelope"></i>
            <input type="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
            <button className="btn purple-button" type="submit" onClick={handleSubmit}>Subscribe</button>
            <div className={`form-message ${messageType}-type`} >
                <p>{message}</p>
            </div>
        </form>
    )
}

export default SubscribeForm