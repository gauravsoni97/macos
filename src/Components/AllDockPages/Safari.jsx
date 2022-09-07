import React, { useState } from 'react'
import Main from '../Main/Main'
import { useNavigate } from 'react-router-dom'
import safaricenter from "../../Imgs/safari.png"




const Safari = () => {

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
              <i className="uil uil-shield"></i>
                <input className='safari_search' type="text" placeholder="Search or enter website name" />
              </div>
              <div className="safari_right d_flex">
              <i className="uil uil-upload"></i>
              <i className="uil uil-plus"></i>
              <i className="uil uil-apps"></i>

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