import React, { useState } from 'react'
import Main from '../Main/Main'
import { useNavigate } from 'react-router-dom';
import "../../../src/Components/PlaygroundArea/NewFolder/OpenWindow.css"
const Maps = () => {

  const navigate = useNavigate();

  const [isFolder, setisFolder] = useState(true)




  const closeWindow = () => {
    return (
      navigate("/home", { replace: true }) &&
      setisFolder(false)
    )
  }


  return (
    <>

      {isFolder ? <>


        <Main />


        <div className="maps-window">
          <div className="maps_left ">
            <div className="open_close_btns d_flex">


              <div className="closebtn top-left-btns top-left-btn1" onClick={closeWindow}></div>
              <div className="yellowbtn top-left-btns top-left-btn2"></div>
              <div className="minimizebtn top-left-btns top-left-btn3"></div>

            </div>
            <br />
            <div className="maps_search_tab d_flex">
              <i class="uil uil-search"></i> &nbsp;
              <input type="search" className="mapsSearchbar" placeholder='Search' />
            </div>

            <div className="maps_menulist">
              <div className="menuItemList">
                <p className="menuItemHeading">Favourites</p>
                <ul className="menuItems">
                  <span className="item-box">
                    <i class="uil uil-home mapleft_icons" style={{ color: '#2184ff' }}></i>
                    <p className=' item_name_map'>Home <br /> <span className="addit">add</span></p>

                  </span>
                  <span className="item-box">
                    <i class="uil uil-bag mapleft_icons" style={{ color: '#2184ff' }}></i>
                    <p className='item_name_map'>Work <br /> <span className="addit">add</span></p>

                  </span>

                </ul>
              </div>
              <div className="menuItemList">
                <p className="menuItemHeading">My Guides</p>
                <ul className="menuItems">
                  <span className="item-box">
                    <i class="uil uil-plus-circle" style={{ color: "gray" }}></i>
                    <p className=' item_name_map'>Add Guide</p>

                  </span>


                </ul>
              </div>

            </div>

          </div>
          <div className="maps-right">
            <div className="maps-header-right d_flex">
              <div className="left-sideof-mapsheader d_flex">
                <i class="uil uil-window"></i>
                <p className='location_text'>Ellenabad - Sirsa</p>
              </div>
              <div className="right-sideof-mapsheader">
              <i class="uil uil-telegram-alt"></i>
              <i class="uil uil-map"></i>
              <i class="uil uil-corner-up-right"></i>
              <i class="uil uil-plus"></i>
              <i class="uil uil-upload"></i>
              <i class="uil uil-user-circle"></i>
              </div>
            </div>



            <div className="Actuall_map">
              <iframe className='mapgraph' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27793.300518137017!2d74.64880559328567!3d29.453262973615537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916bcb50b4d5977%3A0x2070584ab75be3e7!2sEllenabad%2C%20Haryana%20125102%2C%20India!5e0!3m2!1sen!2sus!4v1662612764855!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>


      </> : <Main />}

    </>
  )
}

export default Maps