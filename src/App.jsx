import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css'
import Notfound from './pages/Notfound'
import Home from './pages/home'


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