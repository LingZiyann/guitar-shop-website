import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Store from './pages/Store'
import Navbar from './components/Navbar/Navbar'

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>

      </Routes>
    </>
  )
}
  

export default App
