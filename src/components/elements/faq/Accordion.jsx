import React, { useContext, useEffect } from 'react'
import { FaqContext } from '../../../contexts/FaqContext'
import AccordionItem from './AccordionItem'

const Accordion = () => {
  const { faqs } = useContext(FaqContext)

  return (
    <div className="accordion" id="faq-accordion">
      
      {
        faqs.map(faq => (<AccordionItem key={faq.id} parent="#faq-accordion" item={faq} />))
      }

    </div>
  )
}

export default Accordion