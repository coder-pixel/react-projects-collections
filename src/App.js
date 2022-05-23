import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useLocation } from 'react-router-dom';


import Navbar from './Navbar';

import Home from './Home';
import BirthdayReminder from './Projects/Birthday_Reminder/BirthdayReminder';
import Tours from './Projects/Tours/Tours';
import Reviews from './Projects/Reviews/Reviews';
import Accordion from './Projects/Accordion/Accordion';
import Menu from './Projects/Menu/Menu';
import { useState } from 'react';
import Tabs from './Projects/Tabs/Tabs';
import SliderReview from './Projects/SliderReviews/SliderReview';
import ColorGenerator from './Projects/ColorGenerator/ColorGenerator';
import ShoppingBud from './Projects/ShoppingBud/ShoppingBud';
import ReducerCart from './Projects/ReducerCart/ReducerCart';
import CartContextProvider from './Projects/ReducerCart/Context/CartContext';
import RandomPerson from './Projects/RandomPerson/RandomPerson';
import ImageGallery from './Projects/Image Gallery/ImageGallery';
import Pagination from './Projects/Pagination/Pagination';

function App() {
  const [showNavbar, setShowNavbar] = useState(false)

  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* {showNavbar ?
        (
          <Navbar />
        )
        :
        (
          <nav>
            <h1 className="nav_logo">My Projects</h1>
            {showNavbar ?
              (
                <>
                  <img src="images/hamburger.png" alt="" />
                  <Navbar />
                </>
              )
              :
              (
                <img src="images/cross.png" alt="" onClick={()=> setShowNavbar(!showNavbar)}/>
              )
            }
          </nav>
        )

      } */}



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/birthday' element={<BirthdayReminder />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/tabs' element={<Tabs />} />
        <Route path='/sliderreview' element={<SliderReview />} />
        <Route path='/colorgenerator' element={<ColorGenerator />} />
        <Route path='/shoppingbud' element={<ShoppingBud />} />
        <Route path='/cart' element={
          <CartContextProvider>
            <ReducerCart />
          </CartContextProvider>
        } />
        <Route path='/randomperson' element={<RandomPerson />} />
        <Route path='/imagegallery' element={<ImageGallery />} />
        <Route path='/pagination' element={<Pagination />} />
      </Routes>

      {location.pathname !== "/" &&
        <Link to={"/"}>
          <div className="backToHome" title='Back To Home'>
            <img src="./images/home.png" alt="" />
          </div>
        </Link>
      }

    </div>
  );
}

export default App;
