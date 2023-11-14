import { AuxContext } from "../Auth/context/AuxContext"

export const AuthProvider = ({ children }) => {
    
    return (
        <AuxContext.Provider value={{isLoaggedIn: true}}>
            {children}
        </AuxContext.Provider>
    )
}