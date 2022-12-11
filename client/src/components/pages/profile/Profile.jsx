import './profile.css';
import { useContext } from "react";
import { UserProvider } from "../../../context/UserContext";
import UserDetails from "./userInfo/UserDetails";
import TurnComponents from './TurnsComponents';
const Profile = () => {
    const { user } = useContext(UserProvider);
    return (
        <div className="warp_profile">
            <div className='profile'>
                <UserDetails userData={user} />
                <TurnComponents userData={user} />
            </div>
        </div>
    )
}
export default Profile;