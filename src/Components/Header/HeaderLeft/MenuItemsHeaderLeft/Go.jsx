import * as React from 'react';

import Popover from '@mui/material/Popover';

import "../../HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"




const Go = () => {

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
                Go
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
                    <div className='popoverbox' style={{ minWidth: "220px" }}>
                        <ul className='popovermenu'>
                            <li className='Header_Left_popover_items   '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Back</p>
                                    <p className='dull_text_popover'>⌘ &#91;</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items '>
                                <div className='d_flex space_between'>
                                    <p className='dull_text_popover'>Forward</p>
                                    <p className='dull_text_popover'>⌘ &#93;</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Enclosing Folder</p>
                                    <p className='dull_text_popover'>⌘ &#9650;</p>
                                </div>
                            </li>


                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-clock-eight"></i>  Recents</p>
                                    <p className='dull_text_popover'>⇧ ⌘ F</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'> <i className="uil uil-file"></i> Documents</p>
                                    <p className='dull_text_popover'>⇧ ⌘ O</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-window-maximize"></i> Desktop</p>
                                    <p className='dull_text_popover'>⇧ ⌘ D</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-arrow-circle-down"></i> Downloads</p>
                                    <p className='dull_text_popover'>⌘ L</p>
                                </div>
                            </li>
                          

                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-home"></i> Home</p>
                                    <p className='dull_text_popover'>⇧ ⌘ H</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-laptop"></i> Computer</p>
                                    <p className='dull_text_popover'>⇧ ⌘ C</p>
                                </div>
                            </li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-bullseye"></i> AirDrop</p>
                                    <p className='dull_text_popover'>⇧ ⌘ R</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-globe"></i> Network</p>
                                    <p className='dull_text_popover'>⇧ ⌘ K</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-cloud"></i> iCloud Drive</p>
                                    <p className='dull_text_popover'>⇧ ⌘ I</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-wallet"></i> Shared</p>
                                    <p className='dull_text_popover'>⇧ ⌘ S</p>
                                </div>
                            </li>
                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-letter-english-a"></i> Applications</p>
                                    <p className='dull_text_popover'>⇧ ⌘ A</p>
                                </div>
                            </li>
                    
                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'><i className="uil uil-ruler"></i> Utilties</p>
                                    <p className='dull_text_popover'>⇧ ⌘ U</p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>
                            <li className='Header_Left_popover_items  bright_text_popover_Item'>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Recent Folders</p>
                                    <p className='dull_text_popover'></p>
                                </div>
                            </li>

                            <li className='custom_hr'></li>

                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Go to Folders</p>
                                    <p className='dull_text_popover'>⇧ ⌘ G</p>
                                </div>
                            </li>

                          

                            <li className='Header_Left_popover_items  bright_text_popover_Item '>
                                <div className='d_flex space_between'>
                                    <p className='bright_text_popover'>Connect to Server...</p>
                                    <p className='dull_text_popover'>⌘ K</p>
                                </div>
                            </li>
                           

                            

                        
                        </ul>


                    </div>
                </Popover>
            </div>

        </>
    )
}

export default Go