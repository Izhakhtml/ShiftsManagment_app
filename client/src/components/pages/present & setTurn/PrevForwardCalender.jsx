import { AiFillRightCircle } from 'react-icons/ai'
import { AiFillLeftCircle } from 'react-icons/ai'
import './style.css'
const PrevForwardCalender = ({ columnNumber, setIsWidely, setColumnNumber }) => {
    return (
        <div>
            <AiFillLeftCircle className='leftBtn' onClick={() => {
                if (columnNumber >= 6) {
                    setIsWidely(false)
                    setColumnNumber(oo => oo - 2)
                }
            }}/> 

            <AiFillRightCircle className='rightBtn' onClick={() => {
                setIsWidely(false)
                setColumnNumber(oo => oo + 2)
            }}/>
        </div>
    )
}
export default PrevForwardCalender;