import { createContext, useEffect, useState } from "react";
import { Get } from "../services/turnService";
export const ShiftProvider = createContext();
export const ShiftContext = ({ children }) => {
    const [arrayShift, setArrayShift] = useState([])
    useEffect(() => {
        Get()
            .then(data => setArrayShift(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <ShiftProvider.Provider value={{ arrayShift, setArrayShift }}>
            {children}
        </ShiftProvider.Provider>
    )
}