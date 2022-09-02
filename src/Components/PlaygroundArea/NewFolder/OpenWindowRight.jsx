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
                                <img style={{width:"20px", marginRight:".5rem"}} src={folder} alt="" />
                            </div>
                            <p className='foldernameopened' >Untitled folder</p>
                        </div>


                    </div>

                    <div className="header-rightside"></div>
                </div>
            </div>
        </>
    )
}

export default OpenWindowRight