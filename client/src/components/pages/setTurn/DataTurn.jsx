import './style.css'
const DataTurn = ({ dataTurn }) => {
    return (
        <div className='turn_info'>
            <h2>קביעת תור</h2>/
            <span className='span_tap'>תאריך: {dataTurn.date}</span>
            <p>התחלה: {dataTurn.startHour} סוף: {dataTurn.endHour}</p>
        </div>
    )
}
export default DataTurn;