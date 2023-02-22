import './style.css'
import PresentDataTurn from './PresentDataTurn'
import { useEffect, useState, useContext } from 'react'
import { CalenderProvider } from '../../../context/CalenderContext'
import DayCell from './DayCell'
import { format } from 'date-fns'
const GetTurns = ({ startSelection }) => {
    const { arrayShift, dataObject, setDataObject, isDataArrived } = useContext(CalenderProvider);
    const [currentObj, setCurrentObj] = useState({}); //! this state effect on the cell color green or gray
    const [isHourPassed, setIsHourPassed] = useState({})
    const CurrentDate = new Date()
    useEffect(() => {
        if (arrayShift.length > 0) {
            for (let i = 0; i < arrayShift.length; i++) {
                if (arrayShift[i].selectedDay == format(startSelection.startTime._d, 'dd/MM/yyyy') && arrayShift[i].startHour == format(startSelection.startTime._d, 'HH:ss')) return setCurrentObj({ ...startSelection, isSet: true });
                setCurrentObj({ ...startSelection, isSet: false })
            }
        }
    }, [isDataArrived])
    useEffect(() => {
        if (startSelection.endTime != undefined) {
            // `${CurrentDate.getDate()}/${CurrentDate.getMonth() + 1}/${CurrentDate.getFullYear()}`
            if (format(startSelection.endTime._d, 'dd/MM/yyyy') == format(CurrentDate, 'dd/MM/yyyy')) {
                if (format(startSelection.startTime._d, 'HH:ss').substr(0, 2) > CurrentDate.getHours()) {
                    setIsHourPassed({ ...startSelection, isPass: false })
                } else {
                    setIsHourPassed({ ...startSelection, isPass: true })
                }
            }
        }
    }, [])

    const ChangeData = () => { //! this function is doing two setstate for context file.  
        setDataObject(startSelection) //! this state gets new object every click on the cell button and transfer to PresentDataTurn component.
    }

    return (
        <>
            <DayCell ChangeData={ChangeData} currentObj={currentObj} isHourPassed={isHourPassed} />
            {dataObject != {} && dataObject.startTime != undefined ? <PresentDataTurn dataObject={dataObject.startTime._d} data={{ date: format(dataObject.startTime._d, 'dd/MM/yyyy'), startHour: format(dataObject.startTime._d, 'HH:ss'), endHour: format(dataObject.endTime._d, 'HH:ss') }} /> : ""}
        </>
    )
}
export default GetTurns;