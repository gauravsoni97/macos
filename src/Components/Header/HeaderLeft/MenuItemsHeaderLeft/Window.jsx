import * as React from 'react';

import Popover from '@mui/material/Popover';

import "../../HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"




const Window = () => {

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
                Window
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
                    <div className='popoverbox' style={{ minWidth: "300px" }}>
                        <ul className='popovermenu'>
                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Minimise</p>
                                    <p className='dull_text_popover'>⌘ M</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Zoom</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Move Window to Left Side of Screen</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Move Window to Right Side of Screen</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Replace Tiled Window</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Cycle Through Windows</p>
                                    <p className='dull_text_popover'>⌘ '</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Show Progress Window</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                          
                            <li className='custom_hr'></li>

                            
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Show Previous Tab</p>
                                    <p className='dull_text_popover'><i class="uil uil-angle-up"></i> ⇧ <i class="uil uil-arrow-to-right"></i></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Show Next Tab</p>
                                    <p className='dull_text_popover'><i class="uil uil-angle-up"></i>  <i class="uil uil-arrow-to-right"></i></p>
                                </div>
                            </li>

                          
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Move Tab to New Window</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Merge All Windows</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Bring All to Front</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between bright_text_popover_Item'>
                                    <p className='bright_text_popover'>&#10004; Recents</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                           

                            

                        
                        </ul>


                    </div>
                </Popover>
            </div>

        </>
    )
}

export default Window