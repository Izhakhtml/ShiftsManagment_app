import './profile.css';
import { useContext } from "react";
import { UserProvider } from "../../../context/UserContext";
import UserDetails from "./UserDetails";
import TurnComponents from './TurnsComponents';
const Profile = () => {
    const { user } = useContext(UserProvider);
    return (
        <div className="profile">
            <TurnComponents userData={user} />
            <UserDetails userData={user} />
        </div>
    )
}
export default Profile;