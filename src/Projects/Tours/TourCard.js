import React, { useState } from 'react'

const TourCard = ({ tourData, deleteTour }) => {
    // console.log(tourData)
    const { id, name, info, image, price } = tourData;

    const [readMore, setReadMore] = useState(false);
    return (
        <div className='tourCard'>
            <div className="imgDiv">
                <img src={image} alt={name} />
            </div>

            <div className="textDiv">
                <div className="headingDiv">
                    <h4>{name}</h4>
                    <span>${price}</span>
                </div>

                <p>{readMore ? info : `${info.substring(0,200)}...`} <span onClick={() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Show More"}</span></p>

                <button onClick={() => deleteTour(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default TourCard