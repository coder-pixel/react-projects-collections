import React, { useState } from 'react'

const AccordionCard = ({ accordionData }) => {
    // console.log(accordionData)

    const { id, title, info } = accordionData;
    // console.log(title)
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className={`accordion_Card ${showInfo ? "expand" : ""}`} key={id}>
            <div className="accordion_title">{title}
                <button onClick={() => {
                    console.log("showInfo(before): " + showInfo)
                    return setShowInfo(!showInfo)
                    console.log("showInfo(after): " + showInfo)
                }}>
                    {showInfo ?
                        (
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
                        )
                        :
                        (
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path></svg>
                        )
                    }
                </button>
            </div>
            <div className="accordion_info">{info}</div>
        </div>
    )
}

export default AccordionCard