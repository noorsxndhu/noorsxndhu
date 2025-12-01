import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css'
import Notfound from './pages/notfound.jsx'
import Home from './pages/home.jsx'


function App() {


  return (
     <>
        <BrowserRouter>
        
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path="*" element = {<Notfound/>}/>
        </Routes>
        </BrowserRouter>
        </>
  )
}

export default App


//Navbar:

//Make portfolio cli 