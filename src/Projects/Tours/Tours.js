import React, { useEffect, useState } from 'react'
import "./Tours.css"

import TourCard from './TourCard'

const url = "https://course-api.com/react-tours-project";
// const data = async () => {
//     let d = await fetch("https://course-api.com/react-tours-project")
//     let res = await d.json()
//     console.log(res)
//     return res
// }

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);    

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const toursData = await response.json()
            // console.log(toursData)
            setTours(toursData)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            // console.log(err)
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])

    const deleteTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours);
    }

    return (
        (loading ?
            (
                <div className="loadingDiv">
                    <h1>Loading...</h1>
                </div>
            )
            :
            (
                tours.length > 0 ?
                    (
                        <div className="tours">
                            <div className="tourHeading">
                                <h2>Our Tours</h2>
                            </div>
                            {tours.map((tour) => <TourCard key={tour.id} tourData={tour} deleteTour={deleteTour} />)}
                        </div>
                    )
                    :
                    (
                        <div className="tours">
                            <div className="tourHeading">
                                <h2>No Tours Left</h2>
                            </div>
                            <button className="refresh" onClick={() => fetchTours()}>Refresh</button>
                        </div>
                    )
            )
        )

    )
}

export default Tours