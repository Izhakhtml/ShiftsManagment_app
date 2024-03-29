import { createContext, useState, useEffect } from "react";
export const UserProvider = createContext();
export const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(null);
    const [isDisappear, setIsDisappear] = useState(null)
    useEffect(() => {
        if (localStorage.getItem('userObject') !== "undefined") {
            setUser(JSON.parse(localStorage.getItem('userObject')))
        }
        if (localStorage.getItem('isConnected') !== undefined) {
            setIsLogin(localStorage.getItem('isConnected'))
        }
        // localStorage.removeItem('userObject')
        // localStorage.removeItem('image')
    }, [])
    return (
        <UserProvider.Provider value={{ user, setUser, isLogin, setIsLogin, isDisappear, setIsDisappear }}>
            {children}
        </UserProvider.Provider>
    )
}
export default UserContext;