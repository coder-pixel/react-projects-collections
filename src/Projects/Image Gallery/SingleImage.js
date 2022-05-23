import React, { useState } from 'react'

const SingleImage = ({ photo,showModal, setShowModal, modalImageSrc, setModalImageSrc }) => {
    // console.log(photo)

    const { urls, likes, user } = photo

    const { regular } = urls
    const { name, portfolio_url, profile_image } = user
    const { medium } = profile_image


    return (
        showModal ?
            (
                <div className="modalImage" >
                    <div className="modalImage_close" onClick={() => setShowModal(false)}>
                        <h4>X</h4>
                    </div>
                    <img src={modalImageSrc} alt="" />
                </div>
            )
            :
            (
                <div className='singleImage'>
                    <img src={regular} alt={name} onClick={() => {
                        setShowModal(true)
                        setModalImageSrc(regular)
                    }} />
                    <div className="textDiv">
                        <div className="userDetails">
                            <div>
                                <h2>{name}</h2>
                                <p>{likes} likes</p>
                            </div>

                            <a href={portfolio_url} target="_blank">
                                <img src={medium} alt="" />
                            </a>

                            {/* <div className="userProfile">
                    </div> */}
                        </div>
                    </div>
                </div>
            )
    )
}

export default SingleImage