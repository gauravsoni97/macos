import * as React from 'react';
import battery from "../../../../Imgs/HeaderRight/battery.png"

import Popover from '@mui/material/Popover';

import "./PopoverStyle.css"

const Battery = () => {


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




      <li className='header_right_menu_item' aria-describedby={id} variant="contained" onClick={handleClick}>

        <img className='header_right_itemimg' style={{ width: "1.3rem" }} src={battery} alt="" />

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
          <div className='popoverbox' style={{ minWidth:"260px"}}>
            <ul className='popovermenu'>
              <li className='popover_items'>
                <div className='d_flex space_between firsttab-battery'>
                  <p className='main_text_popover'>Battery</p>
                  <p className='sec_text_popover'>70%</p>
                </div>
                <p className='sec_text_popover'>Power Source: Battery</p>
              </li>

              <li className='custom_hr'></li>
             
              <li className='popover_items'>Battery Preferences...</li>
            </ul>


          </div>
        </Popover>
      </div>

    </>
  )
}

export default Battery