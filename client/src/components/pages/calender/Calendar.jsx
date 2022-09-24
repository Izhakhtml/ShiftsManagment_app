import '../../../App.css'
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import GetTurns from '../present & setTurn/GetTurn';
import Loading from '../../../loading/Loading';
import { CalenderProvider } from '../../../context/CalenderContext';
import { useContext } from 'react';
const CalendarApp = () => { //! component
    const { isLoading } = useContext(CalenderProvider);
    return (
        <div className='warp_Calender'>
            <h1>קביעת תור</h1>
            <div className='contain_calender'>
                { isLoading ? <Loading type='spin' color='black' /> : ""}
                <WeekCalendar
                    startTime={{ h: 8, m: 0 }}
                    endTime={{ h: 20, m: 15 }}
                    scaleUnit={60}
                    scaleHeaderTitle="שעות"
                    dayFormat='YYYY-MM-DD'
                    cellHeight={35}
                    dayCellComponent={(startSelection) => { return <GetTurns startSelection={startSelection} /> }}
                />
            </div>
        </div>
    )
}
export default CalendarApp;