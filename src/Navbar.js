import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/birthday">Birthday Reminder</NavLink>
            <NavLink exact to="/tours">Tours</NavLink>
            <NavLink exact to="/reviews">Reviews</NavLink>
            <NavLink exact to="/accordion">Accordion</NavLink>
            <NavLink exact to="/menu">Menu</NavLink>
            <NavLink exact to="/tabs">Tabs</NavLink>
            <NavLink exact to="/sliderreview">Slider Review</NavLink>
            <NavLink exact to="/colorgenerator">Color Generator</NavLink>
            <NavLink exact to="/shoppingbud">Shopping Bud</NavLink>
            <NavLink exact to="/cart">Cart</NavLink>
            <NavLink exact to="/randomperson">Random Person</NavLink>
            <NavLink exact to="/imagegallery">Image Gallery</NavLink>
            <NavLink exact to="/pagination">Pagination</NavLink>
        </nav>
    )
}

export default Navbar