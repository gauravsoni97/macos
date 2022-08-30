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
import Launchpad from './Components/AllDockPages/Launchpad';
import Safari from './Components/AllDockPages/Safari';
import Messages from './Components/AllDockPages/Messages';
import Email from './Components/AllDockPages/Email';
import Maps from './Components/AllDockPages/Maps';
import Photos from './Components/AllDockPages/Photos';
import Calendar from './Components/AllDockPages/Calendar';
import Contacts from './Components/AllDockPages/Contacts';
import Music from './Components/AllDockPages/Music';
import Podcasts from './Components/AllDockPages/Podcasts';
import Settings from './Components/AllDockPages/Settings';



const App = () => {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);



  return (
    <>

      {loading ? <StartLoader /> :

        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<NewStart />} />
            {/* ------------- Docks imports ---------------- */}
            <Route path="finder" element={<Finder />} />
            <Route path="launchpad" element={<Launchpad />} />
            <Route path="safari" element={<Safari />} />
            <Route path="messages" element={<Messages />} />
            <Route path="email" element={<Email />} />
            <Route path="maps" element={<Maps />} />
            <Route path="photos" element={<Photos />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="music" element={<Music />} />
            <Route path="appstore" element={<AppStore />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="settings" element={<Settings />} />
            <Route exact path="/" element={<Login />} />



          </Routes>
        </BrowserRouter>
      }

    </>
  )
}

export default App