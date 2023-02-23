import '../../../App.css'
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import GetTurns from '../present & setTurn/GetTurn';
import Loading from '../../../loading/loading';
import { CalenderProvider } from '../../../context/CalenderContext';
import { useContext, useEffect, useState } from 'react';
const CalendarApp = () => { //! component
    const { isLoading } = useContext(CalenderProvider);
    const [ppp, setPpp] = useState(7)
    const [bool, setBool] = useState(true)

    useEffect(() => {
        setBool(true)
    }, [ppp])
    return (
        <div className='warp_Calender'>
            <h1>קביעת תור</h1>

            <div className='contain_calender'>
                {isLoading ? <Loading type='spin' color='black' /> : ""}
                {
                    bool ?
                        <WeekCalendar
                            numberOfDays={ppp}
                            startTime={{ h: 8, m: 0 }}
                            endTime={{ h: 20, m: 15 }}
                            scaleUnit={60}
                            scaleHeaderTitle="שעות"
                            dayFormat='ddd MM/DD'
                            cellHeight={32}
                            dayCellComponent={(startSelection) => { return <GetTurns startSelection={startSelection} /> }}
                        /> : ""
                }

            </div>
            <button onClick={() => {
                setBool(false)
                setPpp(9)
            }
            }
            >ppp</button>
        </div>
    )
}
export default CalendarApp;