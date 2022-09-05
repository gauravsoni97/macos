import React from 'react'

import "./OpenWindow.css"
import OpenWindowLeft from './OpenWindowLeft'
import OpenWindowRight from './OpenWindowRight'


const NewFolderOpenWindow = () => {
    return (
        <div className='NewFolderOpenWindow'>

            <OpenWindowLeft />

            <OpenWindowRight />
        </div>
    )
}

export default NewFolderOpenWindow