import React, { useState } from 'react'
import "./HeaderLeft.css";
import File from './MenuItemsHeaderLeft/File';
import Edit from './MenuItemsHeaderLeft/Edit';
import View from './MenuItemsHeaderLeft/View';
import Go from './MenuItemsHeaderLeft/Go';
import Window from './MenuItemsHeaderLeft/Window';
import Help from './MenuItemsHeaderLeft/Help';
import AboutMac from './MenuItemsHeaderLeft/AboutMac';
import AboutFinder from './MenuItemsHeaderLeft/AboutFinder';
import Restart from '../../Restart/Restart';

const HeaderLeft = () => {

  const [restartModal, setRestartModal] = useState(false)


  return (
    <>
      <div className='Header_left_menu'>
        <ul className="left_header_menulist">
          <AboutMac setRestartModal={setRestartModal} />


          {/* ----------------  active tab item  ----------------------*/}


          <AboutFinder />

          {/* --------------------------------------*/}

          <File />
          <Edit />
          <View />
          <Go />
          <Window />
          <Help />





        </ul>
      </div>



      {/* restart window */}
      {restartModal ? <Restart /> : ""}
    </>
  )
}

export default HeaderLeft