import React from 'react'
import { useAuth } from '../ejemplos/Pr_Routers/hooks/UseAuth';

const HomeView = () => {
    const {isLoaggedIn} = useAuth();
    console.log(isLoaggedIn);
    return (
    <div>HomeView</div>
)
}

export default HomeView