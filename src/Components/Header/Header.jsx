import React from 'react'
import "./header.css"
import HeaderLeft from './HeaderLeft/HeaderLeft'
import HeaderRight from './HeaderRight/HeaderRight'
const Header = () => {
    return (
        <header className='header_section'>
            <div className="header_left">
                <HeaderLeft  />
            </div>
            <div className="header_right">
                <HeaderRight />
            </div>
        </header>
    )
}

export default Header