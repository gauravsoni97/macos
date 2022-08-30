import * as React from 'react';
import Wifiimg from "../../../../Imgs/HeaderRight/wifi.png"

import Popover from '@mui/material/Popover';
import Switch from '@mui/material/Switch';

import "./PopoverStyle.css"





const label = { inputProps: { 'aria-label': 'Switch demo' } };




const Wifi = () => {


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

        <img className='header_right_itemimg' src={Wifiimg} alt="" />

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
          <div className='popoverbox' style={{ minWidth: "260px" }}>
            <ul className='popovermenu'>
              <li className='popover_items'>
                <div className='d_flex space_between'>
                  <p className='main_text_popover'>Wifi</p>
                  <p className='sec_text_popover'>
                    <Switch {...label} defaultChecked />

                  </p>
                </div>
              </li>

              <li className='custom_hr'></li>

              <li className='popover_items'>
                <p>Preferred Network</p>

                <div className="connected_network d_flex space_between ">
                  <div className="network_name d_flex">
                    <div className="wifi_symbol"><i class="uil uil-wifi"></i></div>
                    <p className='wifi_name' >Ftth-23409</p>
                  </div>
                  <div className="network_lock">
                    <i class="uil uil-lock"></i>
                  </div>

                </div>


              </li>


              <li className='custom_hr'></li>

              <li className='popover_items'>
                <p>Other Networks</p>

                <div className="connected_network d_flex space_between ">
                  <div className="network_name d_flex">
                    <div className="wifi_symbol"><i class="uil uil-wifi"></i></div>
                    <p className='wifi_name' >Ftth-23409</p>
                  </div>
                  <div className="network_lock">
                    <i class="uil uil-lock"></i>
                  </div>
                </div>
                <div className="connected_network d_flex space_between ">
                  <div className="network_name d_flex">
                    <div className="wifi_symbol"><i class="uil uil-wifi"></i></div>
                    <p className='wifi_name' >Ftth-23409</p>
                  </div>
                  <div className="network_lock">
                    <i class="uil uil-lock"></i>
                  </div>
                </div>
                <div className="connected_network d_flex space_between ">
                  <div className="network_name d_flex">
                    <div className="wifi_symbol"><i class="uil uil-wifi"></i></div>
                    <p className='wifi_name' >Ftth-23409</p>
                  </div>
                  <div className="network_lock">
                    <i class="uil uil-lock"></i>
                  </div>
                </div>
                <div className="connected_network d_flex space_between ">
                  <div className="network_name d_flex">
                    <div className="wifi_symbol"><i class="uil uil-wifi"></i></div>
                    <p className='wifi_name' >Ftth-23409</p>
                  </div>
                  <div className="network_lock">
                    <i class="uil uil-lock"></i>
                  </div>
                </div>
                <div className="connected_network d_flex space_between ">
                  <div className="network_name d_flex">
                    <div className="wifi_symbol"><i class="uil uil-wifi"></i></div>
                    <p className='wifi_name' >Ftth-23409</p>
                  </div>
                  <div className="network_lock">
                    <i class="uil uil-lock"></i>
                  </div>
                </div>


              </li>

              <li className='custom_hr'></li>
              <li className='popover_items'>Network Preferences...</li>

            </ul>


          </div>
        </Popover>
      </div>

    </>
  )
}

export default Wifi