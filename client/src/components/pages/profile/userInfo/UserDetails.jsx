import '../profile.css';
import BtnEditProfile from './BtnEditProfile';
import DryDetails from './DryDetails';
const UserDetails = ({ userData }) => {
    return (
        <div className='pro_details'>
            <DryDetails userData={userData} />
            <BtnEditProfile userData={userData} />
        </div>
    )
}
export default UserDetails