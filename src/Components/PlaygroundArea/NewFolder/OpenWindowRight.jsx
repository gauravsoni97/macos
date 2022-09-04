import React from 'react'

import folder from "../../../Imgs/folderimg/folder.png"

const OpenWindowRight = () => {
    return (
        <>
            <div className="openwindow_right">
                <div className="headerof_topRight_OW">
                    <div className="header-leftside d_flex">
                        <div className="left-right-angles d_flex" >
                            <i class="uil uil-angle-left"></i>
                            <i class="uil uil-angle-right"></i>
                        </div>

                        <div className="foldername-opened d_flex">
                            <div className="folderimg">
                                <img style={{ width: "20px", marginRight: ".5rem" }} src={folder} alt="" />
                            </div>
                            <p className='foldernameopened' >Untitled folder</p>
                        </div>


                    </div>

                    <div className="header-rightside">
                        <i class="uil uil-apps activeviewofApp"></i>
                        <i class="uil uil-list-ul"></i>
                        <i class="uil uil-grids"></i>
                        <i class="uil uil-airplay"></i>

                        <i class="uil uil-elipsis-double-v-alt"></i>
                        <i class="uil uil-upload"></i>
                        <i class="uil uil-pricetag-alt"></i>
                        <i class="uil uil-ellipsis-h"></i>

                        <div className="Searchbar-inFolder-div">
                        <i class="uil uil-search"></i>
                            <input type="text" placeholder='search' className='searchbar_in_Folder' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenWindowRight