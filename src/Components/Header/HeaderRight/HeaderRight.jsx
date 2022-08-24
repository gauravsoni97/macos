import React from 'react'
import "./HeaderRight.css"

import battery from "../../../Imgs/HeaderRight/battery.png"
import wifi from "../../../Imgs/HeaderRight/wifi.png"
import search from "../../../Imgs/HeaderRight/search.png"
import togglebtn from "../../../Imgs/HeaderRight/toggleswitch.png"




const HeaderRight = () => {
  return (
    <div className='header_right' >
      <ul className='header_right_menu'>
        <li className='header_right_menu_item' ><img className='header_right_itemimg' style={{width:"1.3rem"}}   src={battery} alt="" /></li>
        <li className='header_right_menu_item' ><img className='header_right_itemimg'  src={wifi} alt="" /></li>
        <li className='header_right_menu_item' ><img className='header_right_itemimg'  src={search} alt="" /></li>
        <li className='header_right_menu_item' ><img className='header_right_itemimg' style={{width:".9rem"}}  src={togglebtn} alt="" /></li>
        <li className=' header_right_menu_item-text'>{new Date().toLocaleDateString('en-us', { weekday: "short", day: "numeric", month: "short" })}</li>
        <li className=' header_right_menu_item-text'>  {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</li>
      </ul>

    </div>
  )
}

export default HeaderRight