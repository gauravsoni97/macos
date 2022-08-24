import React from 'react'
import "./HeaderLeft.css";
import logo from "../../../Imgs/appleLogo/applelogoblack.png"
import { HeaderLeftDataList } from '../../../MapData/HeaderLeftData'

const HeaderLeft = () => {
  return (
    <div className='Header_left_menu'>
      <ul className="left_header_menulist">
        <li className='menuitem applelogoparent '>
          <img className='applelogo' src={logo} alt="Apple logo" />
        </li>


        {/* ----------------  active tab item  ----------------------*/}


        <li className='menuitem'>
          <b>Finder</b>
        </li>

        {/* --------------------------------------*/}




        {HeaderLeftDataList.map((e) => {
          const { id, name } = e;
          return (
            <>
              <li className="menuitem" key={id}>{name}</li>
            </>
          )
        })}

      </ul>
    </div>
  )
}

export default HeaderLeft