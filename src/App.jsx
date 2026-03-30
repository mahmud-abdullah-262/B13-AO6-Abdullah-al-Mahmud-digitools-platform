
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

function App() {


  return (
   <>
   <Navbar/>
   <Banner/>
   <Stats/>
   <Render/>
   <Steps/>
   <Pricecard/>
   <Explore/>
   <Footer/>
   </>
  )
}

export default App
