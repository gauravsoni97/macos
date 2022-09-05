
import { useState } from 'react';
import { createContext } from 'react'

const AppContext = createContext();


const AppProvider = ({ children }) => {

  const [newFolderWindow, setNewFolderWindow] = useState(false);


    return (

        <>

            <AppContext.Provider value={{newFolderWindow, setNewFolderWindow}}>

                {children}

            </AppContext.Provider>

        </>
    )

}
export { AppContext, AppProvider }