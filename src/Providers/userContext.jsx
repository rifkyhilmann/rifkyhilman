import { createContext, useState, useEffect, useContext, Children } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(() => localStorage.getItem('username') || '')
    const [mode, setMode] = useState(true)

    useEffect(() => {
        localStorage.setItem('username', username)
    }, [username])

    return (
        <UserContext.Provider value={{ username, setUsername, mode, setMode }}>
            {children}
        </UserContext.Provider>
    )
}