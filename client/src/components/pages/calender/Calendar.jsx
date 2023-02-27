import './calender.css'
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import GetTurns from '../present & setTurn/GetTurn';
import Loading from '../../../loading/loading';
import { CalenderProvider } from '../../../context/CalenderContext';
import { useContext, useEffect, useState } from 'react';
import PrevForwardCalender from '../present & setTurn/PrevForwardCalender';
const CalendarApp = () => { //! component
    const { isLoading } = useContext(CalenderProvider);
    const [columnNumber, setColumnNumber] = useState(5)
    const [isWidely, setIsWidely] = useState(true)

    useEffect(() => {
        setIsWidely(true)
    }, [columnNumber])
    return (
        <div className='warp_Calender'>
            <h1>קביעת תור</h1>
             <PrevForwardCalender columnNumber={columnNumber} setIsWidely={setIsWidely} setColumnNumber={setColumnNumber}/> 
            <div className='contain_calender'>
                {isLoading ? <Loading type='spin' color='black' /> : ""}
                {
                    isWidely ?
                        <WeekCalendar
                            numberOfDays={columnNumber}
                            startTime={{ h: 8, m: 0 }}
                            endTime={{ h: 20, m: 15 }}
                            scaleUnit={60}
                            scaleHeaderTitle="שעות"
                            dayFormat='ddd MM/DD'
                            cellHeight={32}
                            dayCellComponent={(startSelection) => { return <GetTurns startSelection={startSelection} /> }}
                        />
                         : "LOADING"
                }
            </div>
        </div>
    )
}
export default CalendarApp;