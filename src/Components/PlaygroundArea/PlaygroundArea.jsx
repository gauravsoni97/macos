import * as React from 'react';
import PopoverBox from '../Popover/PopoverBox'
import "./PlaygroundArea.css"
import RightClickPopover from './RightClickPopover/RightClickPopover'
import "../../Components/Header/HeaderRight/MenuItemsHeaderRight/PopoverStyle.css"

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import folder from '../../Imgs/folderimg/folder.png'
import NewFolder from './NewFolder/NewFolder';





const PlaygroundArea = () => {




  const [contextMenu, setContextMenu] = React.useState(null);

  const [newfolder, setNewfolder] = React.useState([]);

  const [newFolderName, setnewFolderName] = React.useState("Untitled folder");


  // create new folder 

  const createNewFolder = () => {
    setNewfolder((prevFolder) => {
      return [...prevFolder, newfolder]
    })
  }








  // context menu 



  function handleContextMenu(event) {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu


        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
        null
    );
  }

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div className='PlaygroundArea' onContextMenu={handleContextMenu} style={{ cursor: 'default' }} >






      {/* ---------------------  context menu code  ----------- */}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >



        <div className='popoverbox' style={{ minWidth: "230px" }} onClick={handleClose}>
          <ul className='popovermenu'>

            <li className='Header_Left_popover_items bright_text_popover_Item'>
              <div className='d_flex space_between'>
                <p className='bright_text_popover' onClick={ createNewFolder }>New Folder</p>
                <p className='dull_text_popover'></p>
              </div>
            </li>

            <li className='custom_hr'></li>


            <li className='Header_Left_popover_items bright_text_popover_Item'>
              <div className='d_flex space_between'>
                <p className='bright_text_popover'>Get Info</p>
                <p className='dull_text_popover'></p>
              </div>
            </li>
            <li className='Header_Left_popover_items bright_text_popover_Item'>
              <div className='d_flex space_between'>
                <p className='bright_text_popover'>Change Desktop Background...</p>
                <p className='dull_text_popover'></p>
              </div>
            </li>

            <li className='custom_hr'></li>


            <li className='Header_Left_popover_items bright_text_popover_Item'>
              <div className='d_flex space_between'>
                <p className='bright_text_popover'> Use Stacks</p>
                <p className='dull_text_popover'></p>
              </div>
            </li>
            <li className='Header_Left_popover_items bright_text_popover_Item'>
              <div className='d_flex space_between'>
                <p className='bright_text_popover'>Group Stacks By</p>
                <p className='dull_text_popover'></p>
              </div>
            </li>
            <li className='Header_Left_popover_items bright_text_popover_Item'>
              <div className='d_flex space_between'>
                <p className='bright_text_popover'>Show View Options</p>
                <p className='dull_text_popover'></p>
              </div>
            </li>




          </ul>


        </div>

      </Menu>






      {/* --------------------- New folder set  --------------------- */}

      <div className="add_new_folder">

       {newfolder.map((e,index)=>{
        return(
          <>
          <NewFolder index={index} newFolderName={newFolderName} />
          </>
        )
       })}

      </div>


    </div>
  )
}

export default PlaygroundArea