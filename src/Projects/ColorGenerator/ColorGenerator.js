import React, { useState } from 'react'
import "./ColorGenerator.css"
import Values from 'values.js'
import SingleColor from './SingleColor'

const ColorGenerator = () => {
    const [colorBg, setColorBg] = useState("")

    const [color, setColor] = useState("")
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values("#f15025").all(10))

    const [inpError, setInpError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("hello")
        if (color.length !== 3 || color.length !== 6) setInpError("Char length should be 6 digits!")
        try {
            const colors = new Values("#" + color).all(10)
            console.log(colors)
            setList(colors)
            setInpError("")
            setError(false)
        } catch (err) {
            setError(true)
            setInpError("Pls enter correct color code!")
            console.log(err)
        }
    }

    // console.log(list[5].hex)

    return (
        <>
            <div className="colorGenerator_bg" style={{backgroundColor: colorBg}}>
                <section className="colorGenerator_container">
                    <h3>color generator</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className={`${error ? "error" : null}`}
                        />
                        <span className='inpSpan'>#</span>
                        <button className="btn" type='submit'>Submit</button>
                    </form>
                    <span className="inpError">{inpError ? inpError : null}</span>
                </section>

                <section className="colorGenerator_colors">
                    {/* {console.log(list)} */}
                    {list.map((color, index) => {
                        {/* console.log({...color}) */ }
                        return <SingleColor key={index} color={color} index={index} setColorBg={setColorBg} />
                    })}
                </section>
            </div>
        </>
    )
}

export default ColorGenerator