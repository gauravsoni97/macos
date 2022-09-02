import React from 'react'
import newfolderimg from "../../../Imgs/folderimg/folder.png"
import "../PlaygroundArea.css";

const NewFolder = (props) => {
    return (
        <span className="new_folder_box">
            <img className='newfolder_img_style' src={newfolderimg} alt="" />
            <p className="foldername">{props.newFolderName} {props.index === 0 ? "" : props.index}</p>
        </span>
    )
}

export default NewFolder