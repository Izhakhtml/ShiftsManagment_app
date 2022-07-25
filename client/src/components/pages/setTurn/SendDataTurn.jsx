import './style.css'
import { Create } from '../../../services/turnService'
import { FaCheck } from 'react-icons/fa'
import { useEffect, useState, useContext } from 'react'
import { CalenderProvider } from '../../../context/CalenderContext'
import { UserProvider } from '../../../context/UserContext'
const SendDataTurn = ({ newDataTurn ,dataObject}) => {
    const [newTurn, setNewTurn] = useState({});
    const { setIsSetTurn, setIsLoading } = useContext(CalenderProvider);
    const { user } = useContext(UserProvider);
    useEffect(() => {
        setNewTurn({
            fullName: user.userName,
            userId: user._id,
            selectedDay: newDataTurn.date,
            startHour: newDataTurn.startHour,
            endHour: newDataTurn.endHour,
            dataObject: dataObject
        })
    }, [])
    // console.log(dataObject);
    const CreateTurnObject = async () => {
        if (window.confirm(` אתה בטוח שאתה רוצה לקבוע תור בתאריך ${newDataTurn.date} בין השעות ${newDataTurn.startHour} ל ${newDataTurn.endHour}?`)) {
            setIsLoading(true);
            await Create(newTurn)
                .then(() => { setIsSetTurn(true) })
                .catch(err => console.error(err))
                .finally(() => setIsLoading(false))
        }
    }
    return (
        <div>
            <button className='button_icon' onClick={CreateTurnObject}><FaCheck /></button>
        </div>
    )
}
export default SendDataTurn