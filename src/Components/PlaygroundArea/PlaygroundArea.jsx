import React from 'react'
import PopoverBox from '../Popover/PopoverBox'
import "./PlaygroundArea.css"
import RightClickPopover from './RightClickPopover/RightClickPopover'






const PlaygroundArea = () => {


  


  function printMousePos(event) {
    insertDiv(event.clientX, event.clientY)
  }

  
  const insertDiv = (x, y) => {
  
   
  }
  document.addEventListener("click", printMousePos);


  return (
    <div className='PlaygroundArea'>PlaygroundArea
    {/* <RightClickPopover/> */}

    
    </div>
  )
}

export default PlaygroundArea