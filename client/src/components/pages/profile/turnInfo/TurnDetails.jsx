import { FaCut } from 'react-icons/fa'
const TurnDetails = ({dataTurn}) => {
    return (
        <div className='turnInfo'>
            <FaCut className='cut_icon' /><br />
            <h3> :בתאריך  {dataTurn.selectedDay}</h3>
            <span> מ:{dataTurn.startHour} עד:{dataTurn.endHour}</span><br />
        </div>
    )
}
export default TurnDetails;