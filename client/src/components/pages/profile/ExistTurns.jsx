import TemplateExistTurn from "./TemplateExistTurn";
import { useContext, useEffect, useState } from "react";
import { CalenderProvider } from "../../../context/CalenderContext";
import { format } from 'date-fns'
import './profile.css';
import NotExistTurn from "./NotExistTurn";
const ExistTurn = ({ userData }) => {
    const { arrayShift, isDataArrived } = useContext(CalenderProvider);
    const [availableTurns, setAvailableTurns] = useState([])
    useEffect(() => {
        let counter = 0;
        if (arrayShift.length > 0) {
            arrayShift.map(item => {
                if (new Date() <= new Date(`${item.selectedDay.substr(item.selectedDay.indexOf('/')+4)}/${item.selectedDay.substr(item.selectedDay.indexOf('/')+1,2)}/${item.selectedDay.substr(0,item.selectedDay.indexOf('/'))}`) || format(new Date(),'dd/MM/yyyy') == item.selectedDay) {
                    if (item.userId == userData._id) {
                        availableTurns[counter] = item;
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
                    availableTurns.map((item, i) => <TemplateExistTurn item={item} i={i} />)
                    : <NotExistTurn />
            }
        </div>
    )
}
export default ExistTurn;