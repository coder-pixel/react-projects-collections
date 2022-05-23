import React, { useState } from 'react'
import ReviewCard from './ReviewCard'
import "./Reviews.css"
import data from "./data"

const Reviews = () => {
  const [reviewData, setReviewData] = useState(data)

  const [currIndex, setCurrIndex] = useState(3)

  // console.log(currIndex)
  return (
    <div className='reviews'>
      <h1 className="review_heading">Our Reviews</h1>

      <div className="reviewCard">
        <ReviewCard reviewData={reviewData[currIndex]} reviewDataLength={reviewData.length} setCurrIndex={setCurrIndex} />
      </div>
    </div>
  )
}

export default Reviews