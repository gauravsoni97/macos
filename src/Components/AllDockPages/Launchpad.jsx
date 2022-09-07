import React from 'react'
import { LaunchPadData } from '../../MapData/LaunchPadData'
import Main from '../Main/Main'

const Launchpad = () => {
  return (
    <>
      <Main />

      <div className="MainLaunchPad_UI">
        <center className="searchbartop">
          <input type="text" placeholder='Search' />
        </center>
        <div className="AllApps">
          {LaunchPadData.map((e) => {
            return (
              <>
                <span className='ImgSpan'>
                  <img className='imgStyle' src={e.img} alt="" />
                  <p className="appname">
                    {e.name}
                  </p>
                </span>
              </>
            )
          })}

        </div>
      </div>


    </>
  )
}

export default Launchpad