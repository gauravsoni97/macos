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
                  <i class="uil uil-plus-circle" style={{color:"gray"}}></i>
                    <p className=' item_name_map'>Add Guide</p>

                  </span>


                </ul>
              </div>

            </div>

          </div>
          <div className="maps-right">
            <div className="maps-header-right">

            </div>
            <div className="Actuall_map">

            </div>
          </div>
        </div>


      </> : <Main />}

    </>
  )
}

export default Maps