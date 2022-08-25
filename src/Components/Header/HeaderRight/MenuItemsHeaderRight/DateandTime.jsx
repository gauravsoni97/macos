import React from 'react'

const DateandTime = () => {
  return (
    <>
          <li className=' header_right_menu_item-text'>{new Date().toLocaleDateString('en-us', { weekday: "short", day: "numeric", month: "short" })}</li>
        <li className=' header_right_menu_item-text'>  {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</li>
    
    </>
  )
}

export default DateandTime