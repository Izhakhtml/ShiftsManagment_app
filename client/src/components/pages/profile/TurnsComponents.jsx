import './profile.css';
import TemplateExistTurn from "./TemplateExistTurn";
import NotExistTurn from "./NotExistTurn";
import Loading from "../../../loading/Loading";
import { useContext, useEffect, useState } from "react";
import { CalenderProvider } from "../../../context/CalenderContext";
import { format } from 'date-fns'
const TurnComponents = ({ userData }) => {
    const { arrayShift, isDataArrived } = useContext(CalenderProvider);
    const [availableTurns, setAvailableTurns] = useState([])
    const [bool, setBool] = useState(false);
    useEffect(() => {
        let counter = 0;
        if (arrayShift.length > 0) {
            arrayShift.map(item => {
                if (new Date() <= new Date(`${item.selectedDay.substr(item.selectedDay.indexOf('/') + 4)}/${item.selectedDay.substr(item.selectedDay.indexOf('/') + 1, 2)}/${item.selectedDay.substr(0, item.selectedDay.indexOf('/'))}`) || format(new Date(), 'dd/MM/yyyy') == item.selectedDay) {
                    if (item.userId == userData._id) {
                        availableTurns[counter] = item;
                        setBool(true);
                        setAvailableTurns([...availableTurns]);
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
                    availableTurns.map((item, i) => bool == true ? <TemplateExistTurn item={item} i={i} /> : <NotExistTurn />)
                    : <Loading type='spin' color={'black'}/>
            }
        </div>
    )
}
export default TurnComponents;