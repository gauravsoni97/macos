import * as React from 'react';

import Popover from '@mui/material/Popover';

import "../../HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"




const AboutFinder = () => {

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
            <b>Finder</b>
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
                    <div className='popoverbox' style={{ minWidth: "230px" }}>
                        <ul className='popovermenu'>
                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>About Finder</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Preferences...</p>
                                    <p className='dull_text_popover'>⌘ ,</p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Empty Bin...</p>
                                    <p className='dull_text_popover'>⇧ ⌘ &#9003;</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Services</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Hide Finder</p>
                                    <p className='dull_text_popover'>⌘ H</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Hide Others</p>
                                    <p className='dull_text_popover'>⌥ ⌘ H</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Show All</p>
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

export default AboutFinder