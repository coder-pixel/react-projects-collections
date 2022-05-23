import React, { useEffect, useState } from 'react'
import PersonCard from './PersonCard';
import "./RandomPerson.css"

const url = 'https://randomuser.me/api/';

const RandomPerson = () => {
    const [loading, setLoading] = useState(true)
    const [personData, setPersonData] = useState({})

    const [activeTitle, setActiveTitle] = useState("")
    const [activeValue, setActiveValue] = useState("")

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.results[0])

        const person = data.results[0]

        const newPerson = {
            name: `${person.name.title} ${person.name.first} ${person.name.last}`,
            image: person.picture.large,
            email: person.email,
            age: person.dob.age,
            address: `${person.location.street.number} ${person.location.street.name}, ${person.location.country}`,
            phone: person.phone,
            password: person.login.password
        }
        // console.log(newPerson)

        setPersonData(newPerson)
        setLoading(false)
        setActiveTitle("name")
        setActiveValue(newPerson["name"])
        // setPersonData(data.results[0])
    }

    useEffect(() => {
        fetchData()
    }, [])


    


    return (
        <div className='randomPerson'>
            <div className="personContainer">
                {loading ?
                    (
                        <div className="loading">
                            <h3>loading...</h3>
                        </div>
                    )
                    :
                    (
                        <PersonCard personData={personData} activeTitle={activeTitle} activeValue={activeValue} setActiveValue={setActiveValue} setActiveTitle={setActiveTitle} fetchData={fetchData} />
                    )
                }

                {console.log("-------------------------------")}
            </div>

        </div>
    )
}

export default RandomPerson