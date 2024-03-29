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
                    <div className='popoverbox' style={{ minWidth: "350px" }}>
                    <div className='d_flex space_between'>
                                    <input type="text" className='helpSearch' placeholder='Search' />
                                </div>
                        <ul className='popovermenu'>
                        
                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>macOS Help</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                            <li className='custom_hr'></li>
                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>See What's New in macOS</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>New to Mac? Learn the Basics</p>
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

export default Help