import React from 'react'
import PopoverBox from '../Popover/PopoverBox'
import "./PlaygroundArea.css"






const PlaygroundArea = () => {


  


  function printMousePos(event) {
    insertDiv(event.clientX, event.clientY)
  }

  
  const insertDiv = (x, y) => {
  
   
  }
  document.addEventListener("click", printMousePos);


  return (
    <div className='PlaygroundArea'>PlaygroundArea
    

    {/* <PopoverBox/> */}
    
    </div>
  )
}

export default PlaygroundArea