import { createContext, useState, useEffect } from "react";
export const UserProvider = createContext();
export const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLogin ,setIsLogin] = useState(false);
    useEffect(()=>{
        if (localStorage.getItem('userObject') != undefined && localStorage.getItem('userObject') != {}) {
            setUser(JSON.parse(localStorage.getItem('userObject')))
        }
        // localStorage.removeItem('userObject');
    },[])
    return (
        <UserProvider.Provider value={{ user, setUser ,isLogin ,setIsLogin}}>
            {children}
        </UserProvider.Provider>
    )
}
export default UserContext;