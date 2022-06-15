import './style.css'
import { useEffect, useState, useContext } from "react";
import SendDataTurn from './SendDataTurn';
import DataTurn from './DataTurn';
import TurnDetails from './TurnDetails';
import { CalenderProvider } from '../../../comtext/CalenderContext';
import io from 'socket.io-client'
const Socket = io.connect('http://localhost:8080');
const PresentDataTurn = ({ data }) => {
    const { isBool, setIsBool, arrayShift, setArrayShift } = useContext(CalenderProvider);
    const [newTurn, setNewTuen] = useState({});
    //! check if there is exist turn in the database
    useEffect(() => {
        if (arrayShift.length > 0) {
            for (let i = 0; i < arrayShift.length; i++) {
                if (arrayShift[i].selectedDay == data.date && arrayShift[i].startHour == data.startHour) return setIsBool(true);
                setIsBool(false)
            }
        }
    }, [])
    //!
    useEffect(() => {
        Socket.on("insert", (data) => {
            setNewTuen(data)
        });
        setArrayShift([...arrayShift, newTurn])
    }, [newTurn])
    return (

        <div>
            {
                isBool != true ?
                    <div className='set_newTurn'>
                        <DataTurn dataTurn={data} />
                        <SendDataTurn newDataTurn={data} />
                    </div> : <TurnDetails details={data} />

            }
        </div>
    )
}
export default PresentDataTurn;