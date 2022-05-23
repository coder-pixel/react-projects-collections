import React, { useState } from 'react'
import "./Accordion.css"
import AccordionCard from './AccordionCard';

import questions from "./data"

const accordionData = questions;
const Accordion = () => {
    
    return (
        <div className='accordion'>
            <div className="accordion_container">
                <div className="left_accordion">
                    <h4>Questions And Answers About Login</h4>
                </div>
                <div className="right_accordion">
                    {accordionData.map((data) => <AccordionCard accordionData={data} />)}
                </div>
            </div>
        </div>
    )
}

export default Accordion