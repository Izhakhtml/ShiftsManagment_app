import { createContext, useState ,useEffect} from "react";
import { Get } from "../services/turnService";
export const CalenderProvider = createContext();
export const CalenderContext = ({ children }) => {
    const [isBool, setIsBool] = useState(false);
    const [arrayShift, setArrayShift] = useState([])
    useEffect(() => {
        Get()
            .then(data => setArrayShift(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <CalenderProvider.Provider value={{ isBool, setIsBool, arrayShift, setArrayShift }}>
            {children}
        </CalenderProvider.Provider>
    )
}