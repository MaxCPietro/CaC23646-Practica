import React from 'react'
import { AuthProvider } from './AuthProvider'

const RootProviders = ({children}) => {
    return <AuthProvider>{children}</AuthProvider>
    ///Debajo todos los providers
}
export default RootProviders