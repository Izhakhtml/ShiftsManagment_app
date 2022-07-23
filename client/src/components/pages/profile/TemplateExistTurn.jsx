import { FaCut } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'
const TemplateExistTurn = ({ item, i }) => {
    return (
        <div className="exist_turn" key={i} >
            <FaCut  className='cut_icon'/><br />
            <h3> {item.selectedDay} :בתאריך </h3>
            <span> מ:{item.startHour} עד:{item.endHour}</span><br />
            <RiDeleteBin7Line className='delete_icon'/>
        </div>
    )
}
export default TemplateExistTurn;