import { FaCut } from 'react-icons/fa'
const TurnDetails = ({dataTurn}) => {
    return (
        <>
            <FaCut className='cut_icon' /><br />
            <h3> {dataTurn.selectedDay} :בתאריך </h3>
            <span> מ:{dataTurn.startHour} עד:{dataTurn.endHour}</span><br />
        </>
    )
}
export default TurnDetails;