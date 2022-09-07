import React, { useEffect, useState } from 'react'

const DateandTime = () => {
  let currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const [time, settime] = useState(currentTime)

  useEffect(() => {
    setInterval(() => {
      settime(time)
    }, 1000);

  },[time])

  return (
    <>
      <li className=' header_right_menu_item-text'>{new Date().toLocaleDateString('en-us', { weekday: "short", day: "numeric", month: "short" })}</li>
      <li className=' header_right_menu_item-text'>
        {time}
      </li>

    </>
  )
}

export default DateandTime