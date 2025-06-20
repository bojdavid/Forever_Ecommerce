import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Card from './pages/card'
import Collection  from './pages/collection'
import Content from './pages/content'
import Login from './pages/login'
import Orders from './pages/orders'
import PlaceOrder from './pages/placeOrder'
import Product from './pages/product'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/card' element={<Card />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/content' element={<Content />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App