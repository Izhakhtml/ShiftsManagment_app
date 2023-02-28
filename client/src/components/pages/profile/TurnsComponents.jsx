import './profile.css';
import ExitTurn from "./turnInfo/ExitTurn";
import NotExistTurn from "./turnInfo/NotExistTurn";
import Loading from "../../../loading/loading";
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
                let createDateObj = new Date(`${item.selectedDay.substr(item.selectedDay.indexOf('/') + 4)}
                                          /${item.selectedDay.substr(item.selectedDay.indexOf('/') + 1, 2)}
                                         /${item.selectedDay.substr(0, item.selectedDay.indexOf('/'))} ${item.startHour}`);
                //! TEST    
                //! new Date() <= new Date(`${item.selectedDay.substr(item.selectedDay.indexOf('/') + 4)}/${item.selectedDay.substr(item.selectedDay.indexOf('/') + 1, 2)}/${item.selectedDay.substr(0, item.selectedDay.indexOf('/'))}`) || format(new Date(), 'dd/MM/yyyy') == item.selectedDay //!
                if (new Date() <= createDateObj) {
                    if (item.userId == userData._id) {
                        availableTurns[counter] = item;
                        setBool(true);
                        setAvailableTurns([...availableTurns]);
                        counter++;
                    } else {
                        availableTurns[counter] = "not exist"
                        setAvailableTurns([...availableTurns])
                    }
                } else {
                    setAvailableTurns(["not exist"])
                }
            });
        }
    }, [isDataArrived])
    useEffect(() => {
        // availableTurns[0] == "not exist" ?
        //     setBool(false) : <></>

        for (let i = 0; i < availableTurns.length; i++) {
            if (availableTurns[i] == 'not exist') setBool(false);
            return

        }
    }, [availableTurns])
    return (
        <div className='exitTurns_component'>
            <h2>תורות </h2>
            <div className='contain_Turns'>
                {
                    availableTurns.length > 0 ?
                        availableTurns.map((item, i) =>
                            <div key={i}>
                                {console.log(availableTurns)}
                                {bool == true ? <ExitTurn data={item} arrayState={availableTurns} setArrayState={setAvailableTurns} /> : <NotExistTurn />}
                            </div>
                        )
                        : <Loading type='balls' color={'black'} />
                }
            </div>
        </div>
    )
}
export default TurnComponents;