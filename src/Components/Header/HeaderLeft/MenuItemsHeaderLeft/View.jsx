import * as React from 'react';

import Popover from '@mui/material/Popover';

import "../../HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"




const View = () => {

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
                View
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
                    <div className='popoverbox' style={{ minWidth: "250px" }}>
                        <ul className='popovermenu'>
                            <li className='Header_Left_popover_items  '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>as icons</p>
                                    <p className='dull_text_popover'>⌘ 1</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>as List</p>
                                    <p className='dull_text_popover'>⌘ 2</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>as Columns</p>
                                    <p className='dull_text_popover'>⌘ 3</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>as Gallery</p>
                                    <p className='dull_text_popover'>⌘ 4</p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>


                            <li className='Header_Left_popover_items bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Use Stacks</p>
                                    <p className='dull_text_popover'>&#8963; ⌘ O</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Group Stacks By</p>
                                    <p className='dull_text_popover'><b>&#62;</b> </p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Clean Up</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                          

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Clean Up By</p>
                                    <p className='dull_text_popover'> </p>
                                </div>
                            </li>


                            <li className='custom_hr'></li>


                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Hide Sidebar</p>
                                    <p className='dull_text_popover'>&#8963; ⌘ S</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Hide Preview</p>
                                    <p className='dull_text_popover'>⇧ ⌘ P</p>
                                </div>
                            </li>


                            <li className='custom_hr'></li>


                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Hide Toolbar</p>
                                    <p className='dull_text_popover'>⌘ T</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Show All Tabs</p>
                                    <p className='dull_text_popover'>⇧ ⌘ \</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Hide All Tabs</p>
                                    <p className='dull_text_popover'>⇧ ⌘ T</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Hide Tab Bar</p>
                                    <p className='dull_text_popover'>⇧ ⌘ T</p>
                                </div>
                            </li>
                          

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Hide Path Bar</p>
                                    <p className='dull_text_popover'> T ⌘ P</p>
                                </div>
                            </li>
                          
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Hide Status Bar</p>
                                    <p className='dull_text_popover'>⌘ /</p>
                                </div>
                            </li>


                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Customise  Toolbar...</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                          
                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Show View Options</p>
                                    <p className='dull_text_popover'>⌘ J</p>
                                </div>
                            </li>
                           
                            <li className='Header_Left_popover_items  '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Show Preview Options</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                            <li className='custom_hr'></li>

                            
                            <li className='Header_Left_popover_items  '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Enter Full Screen</p>
                                    <p className='dull_text_popover'>fn F</p>
                                </div>
                            </li>
                           

                            

                        
                        </ul>


                    </div>
                </Popover>
            </div>

        </>
    )
}

export default View