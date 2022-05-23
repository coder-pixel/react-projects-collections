import React from 'react'

const List = ({ peopleData }) => {
    return (
        <>
            {peopleData.map((pData) => {
                const { id, name, age, image } = pData;
                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default List