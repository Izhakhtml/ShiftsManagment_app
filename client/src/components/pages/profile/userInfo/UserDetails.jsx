import '../profile.css';
import { FaRegEdit } from 'react-icons/fa'
const UserDetails = ({ userData }) => {
    return (
        <div className='pro_details'>
            <h1>{userData.userName}</h1>
            <img src={userData.image} alt="" /><br />
            <FaRegEdit className='edit_icon'/>
        </div>
    )
}
export default UserDetails;