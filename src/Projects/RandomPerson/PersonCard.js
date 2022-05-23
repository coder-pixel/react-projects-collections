import React, { useState } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const PersonCard = ({ personData, activeTitle, activeValue, setActiveTitle, setActiveValue, fetchData }) => {
  const { name, image, age, email, password, address } = personData

  const handleValue = (e) => {
    // console.log("mouse enter")
    // console.log(e.target)
    if (e.target.classList.contains("optionBtn")) {
        const newValue = e.target.dataset.label
        // console.log(newValue)
        // console.log(activeTitle)
        // console.log(activeValue)

        setActiveTitle(newValue)
        setActiveValue(personData[newValue])
    }
}

  return (
    <div className='personCard'>
      <div className="upperCard">
        <div className="imgContainer">
          <img src={image} alt={name} />
        </div>
      </div>

      <div className="lowerCard">
        <h3>My {activeTitle} is </h3>
        <span>{activeValue}</span>

        <div className="personOptions">
          <button
            className='optionBtn'
            data-label="name"
            onMouseOver={handleValue}
          >
             {/* <FaUser /> */}
            Name
          </button>
          <button
            className='optionBtn'
            data-label="email"
            onMouseOver={handleValue}
          >
            {/* <FaEnvelopeOpen /> */}
            Email
          </button>
          <button
            className='optionBtn'
            data-label="age"
            onMouseOver={handleValue}
          >
            {/* <FaCalendarTimes /> */}
            Age
          </button>
          <button
            className='optionBtn'
            data-label="address"
            onMouseOver={handleValue}
          >
            {/* <FaMap /> */}
            Address
          </button>
          <button
            className='optionBtn'
            data-label="phone"
            onMouseOver={handleValue}
          >
            {/* <FaPhone /> */}
            Phone
          </button>
          <button
            className='optionBtn'
            data-label="password"
            onMouseOver={handleValue}
          >
            {/* <FaLock /> */}
            Password
          </button>
        </div>

        <button className="randomUserBtn" onClick={() => fetchData()}>Random User</button>
      </div>
    </div>
  )
}

export default PersonCard