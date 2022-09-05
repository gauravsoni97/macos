import React from 'react'
import Main from '../Main/Main'
import './DockPages.css'
import folder from "../../Imgs/folderimg/folder.png"
import "../../Components/PlaygroundArea/NewFolder/OpenWindow.css"
import NewFolderOpenWindow from '../PlaygroundArea/NewFolder/NewFolderOpenWindow'


const Finder = () => {
    return (
        <>
            <Main />
            <NewFolderOpenWindow/>

        </>
    )
}

export default Finder