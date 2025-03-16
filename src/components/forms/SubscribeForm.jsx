import React, { useState } from 'react'


const SubscribeForm = () => {
    const apiUri = 'https://kyhn24.azurewebsites.net/api/subscribe'
    const [formData, setFormData] = useState({email: ''})
    

    const consoleMessage = (msg) => {
        console.log(msg)
    }

    const setMessage = (msg) => {
        
    }


    const handleChange = (e) => {
        setFormData({ email: e.target.value})

        consoleMessage('handleChange called')
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        consoleMessage('handleSubmit called')
        consoleMessage('formData: ' + formData.email)


        

        if (!formData.email) {
            setMessage('Please enter your email')
            return
        }

        const res = await fetch(apiUri, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok)
            setMessage('You are now subscribed!')

        setFormData({ email:''})
    }


    return (
        <form onSubmit={handleSubmit}>
            <i className="bi bi-envelope"></i>
            <input type="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
            <button className="btn purple-button" type="submit" onClick={handleSubmit}>Subscribe</button>
        </form>
    )
}

export default SubscribeForm