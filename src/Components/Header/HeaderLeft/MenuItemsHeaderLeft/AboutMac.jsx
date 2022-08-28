import * as React from 'react';

import Popover from '@mui/material/Popover';

import "../../HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"
import logo from "../../../../Imgs/appleLogo/applelogoblack.png"




const AboutMac = () => {

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

<li className='menuitem applelogoparent ' aria-describedby={id} variant="contained" onClick={handleClick}>
          <img className='applelogo' src={logo} alt="Apple logo" />
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
                            <li className='Header_Left_popover_items bright_text_popover_Item  '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>About This Mac</p>
                                    <p className='dull_text_popover'>⌘ Z</p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>System Preferebces...</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>


                            


                            <li className='Header_Left_popover_items bright_text_popover_Item  '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>App Store...</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>


                            <li className='custom_hr'></li>


                            <li className='Header_Left_popover_items bright_text_popover_Item  '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Recent Items</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item  '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Force Quit...</p>
                                    <p className='dull_text_popover'>⌥ ⌘ ⎋</p>
                                </div>
                            </li>
                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Sleep</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            
                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Restart...</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>


                            <li className='Header_Left_popover_items bright_text_popover_Item  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Shut Down...</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items bright_text_popover_Item  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Lock Screen</p>
                                    <p className='dull_text_popover'><i class="uil uil-angle-up"></i>⌘ Q</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items bright_text_popover_Item  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Log Out Gaurav's Mac</p>
                                    <p className='dull_text_popover'>⇧ ⌘ Q</p>
                                </div>
                            </li>

                           

                        
                        </ul>


                    </div>
                </Popover>
            </div>

        </>
    )
}

export default AboutMac