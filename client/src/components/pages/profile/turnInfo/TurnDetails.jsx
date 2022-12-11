import { FaCut } from 'react-icons/fa'
const TurnDetails = ({dataTurn}) => {
    return (
        <div className='turnInfo'>
            <FaCut className='cut_icon' /><br />
            <h3> :בתאריך  {dataTurn.selectedDay}</h3>
            <h3> מ:{dataTurn.startHour} עד:{dataTurn.endHour}</h3><br />
        </div>
    )
}
export default TurnDetails;