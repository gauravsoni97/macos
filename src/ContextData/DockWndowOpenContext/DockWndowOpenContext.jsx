
import { createContext } from 'react'

const AppContext = createContext();


const AppProvider = ({ children }) => {


    return (

        <>

            <AppContext.Provider value={"this is value "}>

                {children}

            </AppContext.Provider>

        </>
    )

}
export { AppContext, AppProvider }