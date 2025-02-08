import { useState } from "react"
   export const handleLoggin = () => {
       const [isLoggedIn, setIsLoggedIn] = useState(false)
    

       const handleLoggin = () => {
           setIsLoggedIn(true)
       }
    const handleLogout = () => {
       setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLoggin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}