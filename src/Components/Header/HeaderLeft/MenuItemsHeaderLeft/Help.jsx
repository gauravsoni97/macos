import * as React from 'react';

import Popover from '@mui/material/Popover';

import "../../HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"




const Help = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    return (
        <>

            <li className='menuitem' aria-describedby={id} variant="contained" onClick={handleClick}>
                Help
            </li>


            <div>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    className="popover_class"

                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}

                >
                    <div className='popoverbox' style={{ minWidth: "200px" }}>
                        <ul className='popovermenu'>
                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>New Finder Window</p>
                                    <p className='dull_text_popover'>⌘ N</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>New Folder</p>
                                    <p className='dull_text_popover'>⇧ ⌘ N</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>New Smart Folder</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>New Tab</p>
                                    <p className='dull_text_popover'>⌘ T</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Open</p>
                                    <p className='dull_text_popover'>⌘ O</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Open With</p>
                                    <p className='dull_text_popover'>&#62;</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Close Window</p>
                                    <p className='dull_text_popover'>⌘ W</p>
                                </div>
                            </li>
                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Get Info</p>
                                    <p className='dull_text_popover'>⌘ I</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Rename</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Compress</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Duplicate</p>
                                    <p className='dull_text_popover'>⌘ D</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Make Alias</p>
                                    <p className='dull_text_popover'>&#708;⌘ A</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Quick Look</p>
                                    <p className='dull_text_popover'>⌘ Y</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Print</p>
                                    <p className='dull_text_popover'>⌘ P</p>
                                </div>
                            </li>
                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Share</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                            <li className='custom_hr'></li>
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Move To Bin</p>
                                    <p className='dull_text_popover'>⌘ &#9003;</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Eject</p>
                                    <p className='dull_text_popover'>⌘ E</p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Find</p>
                                    <p className='dull_text_popover'>⌘ F</p>
                                </div>
                            </li>
                           

                            

                        
                        </ul>


                    </div>
                </Popover>
            </div>

        </>
    )
}

export default Help