import './style.css'
import { Create } from '../../../services/turnService'
import { FaCheck } from 'react-icons/fa'
import { useEffect, useState, useContext } from 'react'
import { CalenderProvider } from '../../../comtext/CalenderContext'
const SendDataTurn = ({ newDataTurn }) => {
    const [newTurn, setNewTurn] = useState({});
    const { setIsSetTurn } = useContext(CalenderProvider);
    useEffect(() => {
        setNewTurn({
            fullName: "NAME",
            selectedDay: newDataTurn.date,
            startHour: newDataTurn.startHour,
            endHour: newDataTurn.endHour
        })
    }, [])
    const CreateTurnObject = async () => {
        if (window.confirm(` אתה בטוח שאתה רוצה לקבוע תור בתאריך ${newDataTurn.date} בין השעות ${newDataTurn.startHour} ל ${newDataTurn.endHour}?`)) {
            await Create(newTurn)
                .then(() => { setIsSetTurn(true) })
                .catch(err => console.error(err));
        }
    }
    return (
        <div>
            <button className='button_icon' onClick={CreateTurnObject}><FaCheck /></button>
        </div>
    )
}
export default SendDataTurn