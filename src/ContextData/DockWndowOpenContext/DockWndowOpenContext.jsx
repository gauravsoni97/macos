
import { useState } from 'react';
import { createContext } from 'react'

const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [newFolderWindow, setNewFolderWindow] = useState(false);
    

    const openWindow = () => {
        return (setNewFolderWindow(true))
       
      }



    return (

        <>

            <AppContext.Provider value={{newFolderWindow, setNewFolderWindow, openWindow}}>

                {children}

            </AppContext.Provider>

        </>
    )

}
export { AppContext, AppProvider }