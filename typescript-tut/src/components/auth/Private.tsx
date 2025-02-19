import { Login } from './Login'
import { ProfileProps } from './Profile'
import React from 'react'


type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
}
export const Private = ({ isLoggedIn , Component: Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Vishwas' />
    } else {
        return <Login />
    }
    
}