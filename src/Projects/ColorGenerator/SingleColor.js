import React, { useEffect, useState } from 'react'

const SingleColor = ({ color, index, setColorBg }) => {
    const { rgb, weight, hex } = color;

    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(",")
    // console.log(bcg)

    const hexValue = `#${hex}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
            return () => clearTimeout(timeout)
        }, 3000)
    },[alert])
    return (
        <div
            style={{ backgroundColor: `rgb(${bcg})`}}
            className={`singleColor ${index > 10 && "color_light"}`}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue);
                }
            }
            onMouseEnter={() => {
                setColorBg(hexValue)
            }}
            onMouseLeave={() => {
                setColorBg("")
            }}
        >
            <div className="singleColor_values">
                <p className="percent_value">{weight}%</p>
                <p className="color-value">{hexValue}</p>
            </div>
            {alert && <p className='alert'>Copied to clipboard!</p>}
        </div>
    )
}

export default SingleColor