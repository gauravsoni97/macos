
import AppContext from "../Create";

// creating provider 


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