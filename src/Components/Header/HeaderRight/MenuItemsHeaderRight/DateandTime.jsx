import React, { useEffect, useState } from 'react'

const DateandTime = () => {
  let currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  const [currentDateTime, setCurrentDateTime] = useState(() => currentTime);
  useEffect(() => {
    const secondsTimer = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    }, 1000);
    return () => clearInterval(secondsTimer);
  }, [setCurrentDateTime]);

  return (
    <>
      <li className=' header_right_menu_item-text'>{new Date().toLocaleDateString('en-us', { weekday: "short", day: "numeric", month: "short" })}</li>
      <li className=' header_right_menu_item-text'>
        {currentDateTime}
      </li>

    </>
  )
}

export default DateandTime