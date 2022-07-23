import TemplateExistTurn from "./TemplateExistTurn";
import { useContext, useEffect, useState } from "react";
import { CalenderProvider } from "../../../context/CalenderContext";
import { format } from 'date-fns'
import './profile.css';
import NotExistTurn from "./NotExistTurn";
const ExistTurn = ({ userData }) => {
    const { arrayShift, isDataArrived } = useContext(CalenderProvider);
    let [availableTurns, setAvailableTurns] = useState([])
    useEffect(() => {
        let counter = 0;
        if (arrayShift.length > 0) {
            arrayShift.map(item => {
                if (format(new Date(), 'dd/MM/yyyy') <= item.selectedDay) {
                    if (item.userId == userData._id) {
                        availableTurns[counter] = item
                        setAvailableTurns([...availableTurns])
                        counter++;
                    }
                }
            });
        }
    }, [isDataArrived])

    return (
        <div className="contain_all_existTurn">
            {
                availableTurns.length > 0 ?
                    availableTurns.map((item, i) => <TemplateExistTurn item={item} i={i} />) : <NotExistTurn />
            }
        </div>
    )
}
export default ExistTurn;