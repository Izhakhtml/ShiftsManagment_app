import './style.css'
const DataTurn = ({ dataTurn }) => {
    return (
        <div className='turn_info'>
            <h1>קביעת תור</h1>
            <p className='span_tap'>תאריך: {dataTurn.date}<br/>
            התחלה: {dataTurn.startHour} סוף: {dataTurn.endHour}</p>
        </div>
    )
}
export default DataTurn;