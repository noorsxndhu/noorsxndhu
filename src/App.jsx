import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import './index.css'


import Home from "./pages/home.jsx";
import Notfound from "./pages/notfound.jsx";


function App() {


  return (
     <>
        <BrowserRouter>
        
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path="*" element = {<Notfound/>}/>
        </Routes>
        </BrowserRouter>
        <Analytics />
        </>
        
  )
}

export default App


//Navbar:

//Make portfolio cli 