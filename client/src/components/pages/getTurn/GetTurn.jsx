import { useEffect, useState, useContext } from 'react'
import { CalenderProvider } from '../../../comtext/CalenderContext'
const calenderDays = document.getElementsByClassName('dayCell');
const GetTurns = () => {
    const { arrayShift, setArrayShift } = useContext(CalenderProvider);
    const [allDays, setAllDays] = useState([]);
    useEffect(()=>{
        setAllDays([...calenderDays]);
    },[])
    console.log(allDays); 
    return (
        <div>
        </div>
    )
}
export default GetTurns;