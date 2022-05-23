import React, { useEffect, useState } from 'react'
import "./SliderReview.css"
import data from "./data"
import SliderReviewCard from './SliderReviewCard'

const SliderReview = () => {
    const [sliderData, setSliderData] = useState(data)

    const [currIndex, setCurrIndex] = useState(0)
    const [index, setIndex] = useState(0)
    // const [position, setPosition] = useState("prevSlide")

    // useEffect(() => {

    // },[])
    // console.log(currIndex)

    // const prevSlide = (id) => {
    //     console.log("dataIndex: " + dataIndex)
    //     console.log("id: " + id)


    // }

    useEffect(() => {
        const lastIndex = sliderData.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, sliderData]);

    return (
        <div className='sliderReviews'>
            <h1 className="sliderReviews_heading"><span>/</span> Reviews</h1>

            <div className="sliderReviewCard">
                {sliderData.map((data, personIndex) => {
                    {/* setDataIndex(personIndex); */ }

                    let position = "nextSlide"
                    if (personIndex === index) {
                        // console.log(id == dataIndex)
                        console.log("first")
                        position = "activeSlide"
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === sliderData.length - 1)) {
                        console.log("second")
                        position = "lastSlide"
                    }
                    return (
                        <>
                            {/* {setDataIndex(personIndex)} */}
                            <SliderReviewCard sliderData={data} index={index} setIndex={setIndex} position={position} />
                        </>

                    )
                })}
                <button className="sliderBtn prevBtn" onClick={() => setIndex(index - 1)}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button className="sliderBtn nextBtn" onClick={() => setIndex(index + 1)}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    )
}

export default SliderReview