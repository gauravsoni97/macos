import React from 'react'

import folder from "../../../Imgs/folderimg/folder.png"

const OpenWindowRight = ({ isFolder }) => {
    return (
        <>
            <div className="openwindow_right">
                <div className="headerof_topRight_OW">
                    <div className="header-leftside d_flex">
                        <div className="left-right-angles d_flex" >
                            <i className="uil uil-angle-left"></i>
                            <i className="uil uil-angle-right"></i>
                        </div>

                        <div className="foldername-opened d_flex">
                            {isFolder ?
                                <>
                                    <p className='foldernameopened' >Finder</p>
                                </> :
                                <>

                                    <div className="folderimg">
                                        <img style={{ width: "20px", marginRight: ".5rem" }} src={folder} alt="" />
                                    </div>
                                    <p className='foldernameopened' >Untitled folder </p>
                                </>
                            }

                        </div>


                    </div>

                    <div className="header-rightside">
                        <i className="uil uil-apps activeviewofApp"></i>
                        <i className="uil uil-list-ul"></i>
                        <i className="uil uil-grids"></i>
                        <i className="uil uil-airplay"></i>

                        <i className="uil uil-elipsis-double-v-alt"></i>
                        <i className="uil uil-upload"></i>
                        <i className="uil uil-pricetag-alt"></i>
                        <i className="uil uil-ellipsis-h"></i>

                        <div className="Searchbar-inFolder-div">
                            <i className="uil uil-search"></i>
                            <input type="text" placeholder='search' className='searchbar_in_Folder' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenWindowRight