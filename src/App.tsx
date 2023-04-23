import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import Navbar from './components/Navbar/Navbar'
import { CartProvider } from './context/cart-context'

function App() {
  return(
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
    </CartProvider>

  )
}
  

export default App
