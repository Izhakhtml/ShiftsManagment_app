import { useEffect, useState, useContext} from 'react'
import { CalenderProvider } from '../../../context/CalenderContext'
import PresentDataTurn from './PresentDataTurn'
import DayCell from './DayCell'
import { format } from 'date-fns'
import './style.css'
const GetTurns = ({ startSelection }) => {
    const { arrayShift, dataObject, setDataObject, isDataArrived } = useContext(CalenderProvider);
    const [currentObj, setCurrentObj] = useState({}); //! this state effect on the cell color green or gray
    useEffect(() => {
        if (arrayShift.length > 0) {
            for (let i = 0; i < arrayShift.length; i++) {
                if (arrayShift[i].selectedDay == format(startSelection.startTime._d, 'dd/MM/yyyy') && arrayShift[i].startHour == format(startSelection.startTime._d, 'HH:ss')) return setCurrentObj({ ...startSelection, isSet: true });
                setCurrentObj({ ...startSelection, isSet: false })
            }
        }
    }, [isDataArrived])
    const ChangeData = () => { //! this function is doing two setstate for context file.  
        setDataObject(startSelection) //! this state gets new object every click on the cell button and transfer to PresnentDataTurn component.
    }
    return (
        <>
            <DayCell ChangeData={ChangeData} currentObj={currentObj} />
            {dataObject != {} && dataObject.startTime != undefined ? <PresentDataTurn dataObject={dataObject.startTime._d} data={{ date: format(dataObject.startTime._d, 'dd/MM/yyyy'), startHour: format(dataObject.startTime._d, 'HH:ss'), endHour: format(dataObject.endTime._d, 'HH:ss') }} /> : ""}
        </>
    )
}
export default GetTurns;
