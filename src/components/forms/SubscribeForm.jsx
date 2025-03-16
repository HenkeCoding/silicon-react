import React, { useState } from 'react'


const SubscribeForm = () => {
    const apiUri = 'https://kyhn24.azurewebsites.net/api/subscribe'
    const [formData, setFormData] = useState({email: ''})
    

    const handleChange = (e) => {
        setFormData({ email: e.target.value})
    }


    const handleSubmit = async () => {
        e.preventDefault()

        if (!formData.email) {
            setMessage('Please enter your email')
            return
        }

        const res = await fetch(apiUri, {
            methon: 'post',
            headers: {
                'content-type': 'application/json'
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
            <button className="btn purple-button" type="submit">Subscribe</button>
        </form>
    )
}

export default SubscribeForm