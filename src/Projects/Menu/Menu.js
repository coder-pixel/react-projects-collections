import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"
import MenuCard from './MenuCard'
import data from "./data"

const Menu = () => {
    const [menuData, setMenudata] = useState(data);
    const [menuClass, setMenuClass] = useState("all");
    
    const filterMenu = (category) => {
        console.log(category)

        // document.querySelectorAll(".menu_nav a").classList.remove("active")
        // if(category == "breakfast"){
        //     document.querySelectorAll(".menu_nav a")[1].classList.add("active")
        //     // console.log(document.querySelectorAll(".menu_nav a")[1])
        // }else if(category == "lunch"){
        //     document.querySelectorAll(".menu_nav a")[2].classList.add("active")
        // }else {
        //     document.querySelectorAll(".menu_nav a")[3].classList.add("active")
        // }
        
        let newMenuData = data.filter((data) => data.category == category)
        setMenudata(newMenuData);
    }
    return (
        <div className="menu">
            <h3 className="menu_heading">Our Menu</h3>
            <nav className='menu_nav'>
                <a href="#" onClick={() => setMenudata(data)}>All</a>
                <a href="#" onClick={() => filterMenu("breakfast")}>Breakfast</a>
                <a href="#" onClick={() => filterMenu("lunch")}>Lunch</a>
                <a href="#" onClick={() => filterMenu("shakes")}>Shakes</a>
            </nav>

            <div className="menuCards">
                {menuData.map((data) => <MenuCard data={data} />)}
            </div>
        </div>
    )
}

export default Menu