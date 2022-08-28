import * as React from 'react';

import Popover from '@mui/material/Popover';

import "../../HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"




const Edit = () => {

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
                Edit
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
                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Undo</p>
                                    <p className='dull_text_popover'>⌘ Z</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items'>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Redo</p>
                                    <p className='dull_text_popover'>⇧ ⌘ Z</p>
                                </div>
                            </li>


                            <li className='custom_hr'></li>


                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Cut</p>
                                    <p className='dull_text_popover'>⌘ X</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Copy</p>
                                    <p className='dull_text_popover'>⌘ C</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Paste</p>
                                    <p className='dull_text_popover'>⌘ V</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Select All</p>
                                    <p className='dull_text_popover'>⌘ A</p>
                                </div>
                            </li>

                            
                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Show Clipboard</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>


                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Start Dictation...</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Emoji & Symbols</p>
                                    <p className='dull_text_popover'>fn E</p>
                                </div>
                            </li>

                           

                        
                        </ul>


                    </div>
                </Popover>
            </div>

        </>
    )
}

export default Edit