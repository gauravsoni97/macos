import React from 'react'

import "./OpenWindow.css"
import OpenWindowLeft from './OpenWindowLeft'
import OpenWindowRight from './OpenWindowRight'


const NewFolderOpenWindow = ({setNewFolderWindow}) => {
    return (
        <div className='NewFolderOpenWindow'>

            <OpenWindowLeft setNewFolderWindow={setNewFolderWindow} />

            <OpenWindowRight />
        </div>
    )
}

export default NewFolderOpenWindow