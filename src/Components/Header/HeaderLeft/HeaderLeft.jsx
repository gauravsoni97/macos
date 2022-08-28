import React from 'react'
import "./HeaderLeft.css";
import File from './MenuItemsHeaderLeft/File';
import Edit from './MenuItemsHeaderLeft/Edit';
import View from './MenuItemsHeaderLeft/View';
import Go from './MenuItemsHeaderLeft/Go';
import Window from './MenuItemsHeaderLeft/Window';
import Help from './MenuItemsHeaderLeft/Help';
import AboutMac from './MenuItemsHeaderLeft/AboutMac';
import AboutFinder from './MenuItemsHeaderLeft/AboutFinder';

const HeaderLeft = () => {
  return (
    <div className='Header_left_menu'>
      <ul className="left_header_menulist">
       <AboutMac/>


        {/* ----------------  active tab item  ----------------------*/}


      <AboutFinder/>

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