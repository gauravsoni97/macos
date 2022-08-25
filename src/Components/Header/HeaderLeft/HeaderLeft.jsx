import React from 'react'
import "./HeaderLeft.css";
import logo from "../../../Imgs/appleLogo/applelogoblack.png"
import File from './MenuItemsHeaderLeft/File';
import Edit from './MenuItemsHeaderLeft/Edit';
import View from './MenuItemsHeaderLeft/View';
import Go from './MenuItemsHeaderLeft/Go';
import Window from './MenuItemsHeaderLeft/Window';
import Help from './MenuItemsHeaderLeft/Help';

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

        <File />
        <Edit />
        <View />
        <Go />
        <Window />
        <Help />





      </ul>
    </div>
  )
}

export default HeaderLeft