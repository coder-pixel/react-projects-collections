import React from 'react'

const MenuCard = ({ data }) => {
    
    const { id, title, category, price, img, desc } = data
    return (
        <div className="menuCard" key={id}>
            <div className="menu_ImgDiv">
                <img src={img} alt={title} />
            </div>
            <div className="menu_TextDiv">
                <div className="menuText_heading">
                    <h4>{title}</h4>
                    <span>${price}</span>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default MenuCard