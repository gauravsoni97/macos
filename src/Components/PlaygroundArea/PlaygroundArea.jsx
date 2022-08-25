import React from 'react'
import "./PlaygroundArea.css"






const PlaygroundArea = () => {


  


  function printMousePos(event) {
    insertDiv(event.clientX, event.clientY)
  }

  
  const insertDiv = (x, y) => {
  
   
  }
  document.addEventListener("click", printMousePos);


  return (
    <div className='PlaygroundArea'>PlaygroundArea</div>
  )
}

export default PlaygroundArea