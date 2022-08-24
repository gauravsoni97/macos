import React from 'react'
import FooterMenu from './Components/FooterMenu/FooterMenu'
import "../src/index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// pages 


import NewStart from './Components/AllDockPages/NewStart';
import Finder from './Components/AllDockPages/Finder';
import AppStore from './Components/AllDockPages/AppStore';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewStart />} />
          <Route path="finder" element={<Finder />} />
          <Route path="appstore" element={<AppStore />} />
        </Routes>
      </BrowserRouter>

     


    </>
  )
}

export default App