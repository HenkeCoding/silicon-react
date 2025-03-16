import React from 'react'
import Testimonials from '../components/sections/Testimonials'
import Faq from '../components/sections/Faq'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import PhoneSlider from '../components/sections/Phoneslider'
import MoneyTransfer from '../components/sections/MoneyTransfer'
import Subscribe from '../components/sections/Subscribe'

const HomePage = () => {

    return (
        <>
            <Hero />
            <Features />
            <PhoneSlider />
            <MoneyTransfer />
            <Testimonials />
            <Faq />
            <Subscribe />
        </>
    )
}

export default HomePage
