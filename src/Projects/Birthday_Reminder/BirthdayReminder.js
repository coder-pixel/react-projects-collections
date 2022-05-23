import "./BirthdayReminder.css"
import React, { useState } from 'react'
import List from "./List"
import data from "./data"

function BirthdayReminder() {
    const [ people, setPeople ] = useState(data)
    // console.log(people)

    return (
        <main>
            <section className="birthdayContainer">
                <h3>{people.length > 0 ? people.length : "No"} birthdays today</h3>
                <List peopleData={people} />
                <button onClick={() => setPeople([])}>Clear All</button>
            </section> 
        </main>
    )
}

export default BirthdayReminder