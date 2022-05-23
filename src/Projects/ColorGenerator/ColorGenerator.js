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
        let tempColor;
        if(/[#]/.test(color)) {
            tempColor = color.split("").splice(1).join("")
        }else{
            tempColor = color
        }
        setColor(tempColor)
        if (/[#]/.test(tempColor)) return setInpError("Pls remove '#' and  try again!")
        if (tempColor.length !== 3 && tempColor.length !== 6) {
            return setInpError("Char length should be 3 or 6 digits!")
        }
        try {
            const colors = new Values("#" + tempColor).all(10)
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
            <div className="colorGenerator_bg" style={{ backgroundColor: colorBg }}>
                <section className="colorGenerator_container">
                    <h3>color generator</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => {
                                // console.log(/[#]/.test(color))
                                // console.log(e.target.value.split("").splice(1).join(""))
                                // let res;
                                // if(/[#]/.test(color)) {
                                //     res = e.target.value.split("").splice(1).join("")
                                // }else{
                                //     res = e.target.value
                                // }
                                setColor(e.target.value)
                            }}
                            // onPaste={(e) => {
                            //     console.log("paste method")
                            //     console.log(e)
                            //     let res;
                            //     if(/[#]/.test(e.target.value)) {
                            //         res = e.target.value.split("").splice(1).join("")
                            //     }else{
                            //         res = e.target.value
                            //     }
                            //     setColor(res)
                            // }}
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