import { createContext, useState, useEffect } from "react";
import { Get } from "../services/turnService";
export const CalenderProvider = createContext();
export const CalenderContext = ({ children }) => {
    const [arrayShift, setArrayShift] = useState([]) //! this state gets data from sever
    const [dataObject, setDataObject] = useState({}); //! this state get new object every click on day cell 
    const [isSetTurn, setIsSetTurn] = useState(null); //! this state check if exist turn in the collection of turn
    const [loading, setLoading] = useState(false); //! this state for loading show or disapear
    const [isDataArrived, setIsDataArrived] = useState(false) //! this state for if the data feom server arrived
    useEffect(() => {
        Get()
            .then(data => {
                setArrayShift(data)
                setIsDataArrived(!isDataArrived)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <CalenderProvider.Provider value={{
            isSetTurn, setIsSetTurn,
            arrayShift, setArrayShift,
            dataObject, setDataObject,
            loading, setLoading,
            isDataArrived, setIsDataArrived
        }}>
            {children}
        </CalenderProvider.Provider>
    )
}