
import {  } from 'react-toastify'
import './App.css'
import Navbar from './compontent/Navbar'
import Banner from './compontent/Banner'
import Stats from './compontent/Stats'
import Steps from './compontent/Steps'
import Pricecard from './compontent/Pricecard'
import Explore from './compontent/Explore'
import Footer from './compontent/Footer'
import Render from './compontent/render/render'
import { useState } from 'react'

const getProduct = async () => {
  const res = await fetch('/product.json');
  return res.json()
}
const productPromise = getProduct()




function App() {
const [cartItems, setCartItems] = useState([])

  return (
   <>
   <Navbar cartItems={cartItems} setCartItems={setCartItems} />
   <Banner/>
   <Stats/>
   <Render productPromise={productPromise} cartItems={cartItems} setCartItems={setCartItems} />
   <Steps/>
   <Pricecard/>
   <Explore/>
   <Footer/>
   </>
  )
}

export default App
