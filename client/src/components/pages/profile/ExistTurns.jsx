import { useContext, useEffect, useState } from "react";
import { CalenderProvider } from "../../../context/CalenderContext";
import { format } from 'date-fns'
import './profile.css';

const ExistTurn = ({ userData }) => {
    const { arrayShift, isDataArrived } = useContext(CalenderProvider);
    const [availableTurns, setAvailableTurns] = useState([])
    useEffect(() => {
        if (arrayShift.length > 0) {
            arrayShift.forEach(item => {
                format(new Date(), 'dd/MM/yyyy') <= item.selectedDay ?
                    item.userId == userData._id ?
                        setAvailableTurns([...availableTurns, item]) :
                        <></> : <></>
            });
        }
    }, [isDataArrived])
    return (
        <div>
            {
                availableTurns.length > 0 ?
                    availableTurns.map((item, i) =>
                        <div className="exist_turn" key={i}>{item.selectedDay}</div>
                    ) : ""
            }
        </div>
    )
}
export default ExistTurn;