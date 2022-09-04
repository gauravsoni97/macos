import React from 'react'
import { useState } from 'react'

const OpenWindowLeft = () => {
    return (
        <>
            <div className="openwindow_left">
                <div className="action-btns-window d_flex">
                    <div className="closebtn top-left-btns top-left-btn1"></div>
                    <div className="yellowbtn top-left-btns top-left-btn2"></div>
                    <div className="minimizebtn top-left-btns top-left-btn3"></div>
                </div>

                <div className="menuItemList">
                    <p className="menuItemHeading">Favourites</p>
                    <ul className="menuItems">
                       <span className="item-box">

                       <i class="uil uil-bullseye" style={{color:'#2184ff'}}></i>
                            <p className='item_name'>AirDrop</p>

                        </span>
                       <span className="item-box">

                       <i class="uil uil-clock-seven" style={{color:'#2184ff'}}></i>
                            <p className='item_name'>Recents</p>

                        </span>
                       <span className="item-box">

                       <i class="uil uil-letter-english-a" style={{color:'#2184ff'}}></i>
                            <p className='item_name'>Applications</p>

                        </span>
                       <span className="item-box">

                       <i class="uil uil-window-maximize" style={{color:'#2184ff'}}></i>
                            <p className='item_name'>Desktop</p>

                        </span>
                       <span className="item-box">

                       <i class="uil uil-file" style={{color:'#2184ff'}}></i>
                            <p className='item_name'>Documents</p>

                        </span>
                       <span className="item-box">

                       <i class="uil uil-arrow-circle-down" style={{color:'#2184ff'}}></i>
                            <p className='item_name'>Downloads</p>

                        </span>
                    </ul>
                </div>



                <div className="menuItemList">
                    <p className="menuItemHeading">Locations</p>
                    <ul className="menuItems">
                       <span className="item-box">

                       <i class="uil uil-cloud" style={{color:"grey"}}></i>
                            <p className='item_name'>iCloud Drive</p>

                        </span>
                      
                    </ul>
                </div>




                <div className="menuItemList">
                    <p className="menuItemHeading">Tags</p>
                    <ul className="menuItems">
                       <span className="item-box d_flex color_box">

                           <div className="color_circle" style={{backgroundColor:"red"}}></div>
                            <p className='item_name'>red</p>

                        </span>
                       <span className="item-box d_flex color_box">

                           <div className="color_circle" style={{backgroundColor:"Yellow"}}></div>
                            <p className='item_name'>Yellow</p>

                        </span>
                       <span className="item-box d_flex color_box">

                           <div className="color_circle" style={{backgroundColor:"Orange"}}></div>
                            <p className='item_name'>Orange</p>

                        </span>
                       <span className="item-box d_flex color_box">

                           <div className="color_circle" style={{backgroundColor:"Green"}}></div>
                            <p className='item_name'>Green</p>

                        </span>
                       <span className="item-box d_flex color_box">

                           <div className="color_circle" style={{backgroundColor:"Blue"}}></div>
                            <p className='item_name'>Blue</p>

                        </span>
                       <span className="item-box d_flex color_box">

                           <div className="color_circle" style={{backgroundColor:"Purple"}}></div>
                            <p className='item_name'>Purple</p>

                        </span>
                       <span className="item-box d_flex color_box">

                           <div className="color_circle" style={{backgroundColor:"Grey"}}></div>
                            <p className='item_name'>Grey</p>

                        </span>
                       <span className="item-box">

                       <i class="uil uil-circle-layer"></i>
                            <p className='item_name'>All Tags...</p>

                        </span>
                      
                    </ul>
                </div>

            </div>

        </>
    )
}

export default OpenWindowLeft