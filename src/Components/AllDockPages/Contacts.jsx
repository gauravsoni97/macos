import React, { useState } from 'react'
import Main from '../Main/Main'

import { useNavigate } from 'react-router-dom'

import myimg from "../../Imgs/gauravsoni.jpeg"

const Contacts = () => {

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

      {isFolder ? <> <Main />

        <div className="contactWindow">
          <div className="contact-Left">
            <div className="open_close_window d_flex">
              <div className="closebtn top-left-btns top-left-btn1" onClick={closeWindow}></div>
              <div className="yellowbtn top-left-btns top-left-btn2"></div>
              <div className="minimizebtn top-left-btns top-left-btn3"></div>
            </div>

            <br />
            <div className="highlightText">All Contacts</div>

          </div>
          <div className="contact-Mid">
            <div className="searchbar_Contact d_flex">
              <i class="uil uil-search"></i>
              <input type="text" />
            </div>

            <br />

            <div className="highlightText d_flex space_between">
              <span className="mymac">
                Gaurav's Mac
              </span>
              <i class="uil uil-user-circle"></i>
            </div>


          </div>
          <div className="contact-Right">

            <div className="author_owner">
              <div className="img_my">
                <img  src={myimg} alt="" />
              </div>
              <p className='myname' >Gaurav's Mac</p>
            </div>

            <div className="d_flex contact_links">
              <div className="action_link_contacts">
                <i class="uil uil-comment"></i>
                <p>Message</p>
              </div>
              <div className="action_link_contacts">
                <i class="uil uil-phone-alt"></i>
                <p>Call</p>
              </div>
              <div className="action_link_contacts">
                <i class="uil uil-video"></i>
                <p>Video</p>
              </div>
              <div className="action_link_contacts">
                <i class="uil uil-envelope"></i>
                <p>Mail</p>
              </div>

            </div>
            

            <div className="contact_btns d_flex space_between">
              <span>
                <i class="uil uil-plus  lastbtns_contacts "></i>
              </span>
              <span className='d_flex'>
                <p className='  lastbtns_contacts '>Edit</p>

                <i class="uil uil-upload  lastbtns_contacts "></i>

              </span>
            </div>

          </div>
        </div>

      </> : <Main />}


    </>
  )
}

export default Contacts