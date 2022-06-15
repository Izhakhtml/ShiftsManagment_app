import '../../../App.css'
import { format } from 'date-fns'
import WeekCalendar from 'react-week-calendar';
import PresentDataTurn from '../setTurn/PresentDataTurn';
import 'react-week-calendar/dist/style.css';
const CalendarApp = () => { //! component
    return (
        <div className='warp_Calender'>
            <h1>קביעת תור</h1>
            <div className='contain_calender'>
                <WeekCalendar
                    startTime={{ h: 8, m: 0 }}
                    endTime={{ h: 20, m: 15 }}
                    scaleUnit={60}
                    scaleHeaderTitle="שעות"
                    dayFormat='dddd DD/MM'
                    modalComponent={(Start) => { return <PresentDataTurn data={{ date: format(Start.start._d, 'dd/MM/yyyy'), startHour: format(Start.start._d, 'HH:ss'), endHour: format(Start.end._d, 'HH:ss') }} /> }}
                />
            </div>
        </div>

    )
}
export default CalendarApp;