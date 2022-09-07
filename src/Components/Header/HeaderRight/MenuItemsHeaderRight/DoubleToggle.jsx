import * as React from 'react';

import togglebtn from "../../../../Imgs/HeaderRight/toggleswitch.png"


import Popover from '@mui/material/Popover';

import "./DoubleNotch.css"

import "./PopoverStyle.css"

import Slider from '@mui/material/Slider';


const DoubleToggle = () => {


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
        <img className='header_right_itemimg' style={{ width: ".9rem" }} src={togglebtn} alt="" />
      </li>



      < div >

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
            <div className="inside_box_top d_flex">
              <div className="insidebox_left">
                <div className="Glass_box wifitab">
                  <div className="wifi_boxes">
                    <div className="left_img_box activelinkbg"><i className="uil uil-wifi"></i></div>
                    <div className="righttext">
                      <div className="main_heading">Wi-Fi</div>
                      <p className='sub_head'>FTTH-4326</p>
                    </div>
                  </div>
                  <div className="wifi_boxes">
                    <div className="left_img_box activelinkbg"><i className="uil uil-bluetooth-b"></i></div>
                    <div className="righttext">
                      <div className="main_heading">Bluetooth</div>
                      <p className='sub_head'>On</p>
                    </div>
                  </div>
                  <div className="wifi_boxes">
                    <div className="left_img_box">
                    <i className="uil uil-bullseye"></i>
                    </div>
                    <div className="righttext">
                      <div className="main_heading">AirDrop</div>
                      <p className='sub_head'>Off</p>
                    </div>
                  </div>
                </div>
              </div>



              <div className="insidebox_right">
                <div className="Glass_box focustab">
                  <div className="left_img_box"><i className="uil uil-moon"></i></div>
                  <div className="righttext">
                    <div className="main_heading">Focus</div>
                  </div>
                </div>


                <div className="Glass_box_bottom d_flex">
                  <div className="Glass_box twobottomsq">
                  <i className="uil uil-sunset"></i>
                    <p className='small_text'>Keyboard Brightness</p>
                  </div>
                  <div className="Glass_box twobottomsq">
                  <i className="uil uil-minus-path"></i>
                    <p className='small_text'>Screen Mirroring</p>
                  </div>
                </div>


              </div>
            </div>



            {/* ––––––––––––––– Display and sound  –––––––––––––––  */}

            <div className="inside_box_bottom_Single">


              <div className="Glass_box">
                <p className='main_heading last_sec_head'>Display</p>
                <Slider style={{color:'white'}} defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />

              </div>




              <div className="Glass_box">
                <p className='main_heading last_sec_head'>Sound</p>
                <Slider style={{color:'white'}} defaultValue={30} aria-label="Default" valueLabelDisplay="auto" />


              </div>


            </div>

          </div>

        </Popover>

      </div>



    </>
  )
}

export default DoubleToggle

