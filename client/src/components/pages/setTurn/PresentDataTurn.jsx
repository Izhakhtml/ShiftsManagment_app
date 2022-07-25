import './style.css'
import { useEffect, useState, useContext } from "react";
import SendDataTurn from './SendDataTurn';
import DataTurn from './DataTurn';
import TurnWasSet from './TurnWasSet';
import { CalenderProvider } from '../../../context/CalenderContext';
import io from 'socket.io-client'
const Socket = io.connect('http://localhost:8080');
const PresentDataTurn = ({ data , dataObject}) => {
    const { isSetTurn, setIsSetTurn, arrayShift, setArrayShift, setDataObject, isDataArrived, setIsDataArrived } = useContext(CalenderProvider);
    //! check if there is exist turn in the database
    useEffect(() => {
        if (arrayShift.length > 0) {
            for (let i = 0; i < arrayShift.length; i++) {
                if (arrayShift[i].selectedDay == data.date && arrayShift[i].startHour == data.startHour) return setIsSetTurn(true);
                setIsSetTurn(false)
            }
        }
    }, [])

    Socket.on("insert", (data) => {
        setIsDataArrived(!isDataArrived)
        setArrayShift([...arrayShift, data]);
    });
    //!
    const ChangeData = () => {
        setDataObject({}) //! this state replace the object to empty in order to that not stay with previous data.
        setIsSetTurn(null)
    }
    return (
        <div className='contain_all_info' onClick={ChangeData}>
            {
                isSetTurn !== null ?
                    isSetTurn != true ?
                        <div className='set_newTurn'>
                            <DataTurn dataTurn={data} />
                            <SendDataTurn dataObject={dataObject} newDataTurn={data} />
                        </div> : <TurnWasSet details={data} /> : "Loading"
            }
        </div>
    )
}
export default PresentDataTurn;