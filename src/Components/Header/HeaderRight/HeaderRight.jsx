import React, { useState } from 'react'
import "./HeaderRight.css"
import Battery from './MenuItemsHeaderRight/Battery'
import DateandTime from './MenuItemsHeaderRight/DateandTime'
import DoubleToggle from './MenuItemsHeaderRight/DoubleToggle'
import SearchTab from './MenuItemsHeaderRight/SearchTab'
import Wifi from './MenuItemsHeaderRight/Wifi'





const HeaderRight = () => {

  
  return (
    <div className='header_right' >
      <ul className='header_right_menu'>
        {/* ------------------------------------  battery - Header right  */}
        <Battery />

        {/* ------------------------------------  Wifi - Header right  */}
        <Wifi />

        {/* ------------------------------------  Search - Header right  */}


        <SearchTab />

    
        {/* ------------------------------------  Double Toggle - Header right  */}

        <DoubleToggle />



        {/* ------------------------------------  Date & Time  - Header right  */}
        <DateandTime />

      </ul>

    </div>
  )
}

export default HeaderRight