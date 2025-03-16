import React from 'react'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { TestimonialsProvider } from './contexts/TestimonialsContext'
import { FaqProvider } from './contexts/FaqContext'


const Providers = ({children}) => {
    return (
        <DarkModeProvider>
            <FaqProvider>
                <TestimonialsProvider>

                    {children}

                </TestimonialsProvider>
            </FaqProvider>
        </DarkModeProvider>

    )
}

export default Providers
