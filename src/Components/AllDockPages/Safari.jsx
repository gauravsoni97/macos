import React, { useState } from 'react'
import Main from '../Main/Main'

import safaricenter from "../../Imgs/safari.png"




const Safari = () => {


  const [isFolder, setisFolder] = useState(true)


  const closeWindow = () => {
    return (

      setisFolder(false)

    )
  }



  return (
    <>


      {isFolder ?

        <>
          <Main />


          <div className="safari_div">
            <div className="safari_header">
              <div className="leftside_safari d_flex">
                <div className="closebtn top-left-btns top-left-btn1" onClick={closeWindow}></div>
                <div className="yellowbtn top-left-btns top-left-btn2"></div>
                <div className="minimizebtn top-left-btns top-left-btn3"></div>
              </div>
              <div className="safari_center_search d_flex">
              <i class="uil uil-shield"></i>
                <input className='safari_search' type="text" placeholder="Search or enter website name" />
              </div>
              <div className="safari_right d_flex">
              <i class="uil uil-upload"></i>
              <i class="uil uil-plus"></i>
              <i class="uil uil-apps"></i>

              </div>
            </div>

            <div className="safari_main_center">
              <img className='safari_center' src={safaricenter} alt="" />
            </div>

          </div>
        </>

        : <Main />}
    </>
  )
}

export default Safari