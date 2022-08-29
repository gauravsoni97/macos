import React, { useEffect, useState } from 'react'
import FooterMenu from './Components/FooterMenu/FooterMenu'
import "../src/index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// pages imports
import NewStart from './Components/AllDockPages/NewStart';
import Finder from './Components/AllDockPages/Finder';
import AppStore from './Components/AllDockPages/AppStore';
import Login from './Components/Login/Login';
import StartLoader from './Components/StartLoader/StartLoader';



const App = () => {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 10000);
  }, []);



  return (
    <>

      {loading ? <StartLoader /> :

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewStart />} />
            <Route path="finder" element={<Finder />} />
            <Route path="appstore" element={<AppStore />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>

      }


    </>
  )
}

export default App