import '../profile.css'
import { Delete } from '../../../../services/turnService'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useContext } from "react";
import { CalenderProvider } from '../../../../context/CalenderContext'
const BtnDeleteTurn = ({ dataTurn, arrayState, setArrayState }) => {
    const { setArrayShift, setIsDataArrived, arrayShift, isDataArrived } = useContext(CalenderProvider);
    const FilterArray = (array) => {
        const RenderWithoutTurn = array.filter(item => item._id != dataTurn._id)
        return RenderWithoutTurn;
    }
    const DeleteTurn = () => {
        if (window.confirm(` אתה בטוח שאתה רוצה למחוק את התור בתאריך ${dataTurn.selectedDay} בין השעות ${dataTurn.startHour} ל ${dataTurn.endHour}?`)) {
            Delete(dataTurn._id)
                .then(data => console.log(data))
                .catch(rej => console.error(rej))
            setArrayState(FilterArray(arrayState));
            setArrayShift(FilterArray(arrayShift));
            setIsDataArrived(!isDataArrived)
        }
    }
    return (
        <>
            <RiDeleteBin7Line onClick={DeleteTurn} className='delete_icon' />
            <span className='text_deleteIcon'>מחק תור</span>
        </>

    )
}
export default BtnDeleteTurn;