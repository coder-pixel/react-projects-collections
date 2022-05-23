import React, { useEffect, useState } from 'react'
import TabCard from './TabCard';
import "./Tabs.css"

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
    const [tabsData, setTabsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(0)

    const fetchData = async () => {
        // console.log("before async")
        const res = await fetch(url)
        // console.log("in between async")
        const data = await res.json()
        // console.log("after async")
        setTabsData(data)
        setLoading(false)
        // console.log(displayData)
        // console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const display = (company) => {
        // console.log(company)
        let newDisplay = tabsData.filter(data => data.company == company)
        // console.log("newDisplay: " + newDisplay)
        setTabsData(newDisplay);
    }

    return (
        loading ?
            (
                <div className="loadingDiv">
                    <h1>Loading...</h1>
                </div>
            )
            :
            (
                <div className="tabs">
                    <h1 className="tabs_heading">Experience</h1>

                    <div className="tabs_content">
                        <div className="tabs_left">
                            <ul className='tabsOption'>
                                {tabsData.map((data, ind) => (
                                    <li className={index == ind ? "active" : ""} onClick={() => setIndex(ind)}>{data.company}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="tabs_right">
                            <TabCard displayData={tabsData[index]} />
                        </div>
                    </div>
                </div>
            )

    )
}

export default Tabs