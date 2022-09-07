import * as React from 'react';
import Wifiimg from "../../../../Imgs/HeaderRight/wifi.png"

import Popover from '@mui/material/Popover';
import Switch from '@mui/material/Switch';



import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';



import "./PopoverStyle.css"
import { WifiNamesData } from '../../../../MapData/WifiNames';



const Wifi = () => {


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  const [checked, setChecked] = React.useState(true);

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };


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
          <div className='popoverbox  header-right-popoverbox' style={{ minWidth: "300px" }}>
            <ul className='popovermenu'>


              <li className='popover_items'>
                <div className='d_flex space_between'>
                  <p className='main_text_popover'>Wifi</p>
                  <p className='sec_text_popover'>
                    <Switch
                      checked={checked}
                      onChange={handleChangeSwitch}
                      inputProps={{ 'aria-label': 'controlled' }} />

                  </p>
                </div>
              </li>

              {checked ? <>

                <li className='custom_hr'></li>

                <li className='popover_items'>
                  <p className='main_item_text' >Preferred Network</p>

                  <div className="connected_network d_flex space_between ">
                    <div className="network_name d_flex">
                      <div className="wifi_symbol pref-wifi"><i className="uil uil-wifi"></i></div>
                      <p className='wifi_name' >Ftth-23409</p>
                    </div>
                    <div className="network_lock">
                      <i className="uil uil-lock"></i>
                    </div>

                  </div>


                </li>

              


              <li className='custom_hr'></li>

              <li className='popover_items'>





                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<i className="uil uil-angle-down"></i>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <p className='paracol main_item_text'>

                      Other Networks
                    </p>

                  </AccordionSummary>



                  <AccordionDetails>

                    {WifiNamesData.map((e) => {
                      const { id, wifi } = e;

                      return (
                        <>
                          <div className="connected_network d_flex space_between " key={id}>
                            <div className="network_name d_flex">
                              <div className="wifi_symbol"><i className="uil uil-wifi"></i></div>
                              <p className='wifi_name' >{wifi}</p>
                            </div>
                            <div className="network_lock">
                              <i className="uil uil-lock"></i>
                            </div>
                          </div>
                        </>
                      )
                    })}




                  </AccordionDetails>
                </Accordion>











              </li>



              </>
                : ""}

              <li className='custom_hr'></li>
              <li className='popover_items main_item_text'>Network Preferences...</li>

            </ul>


          </div>
        </Popover>
      </div>

    </>
  )
}

export default Wifi