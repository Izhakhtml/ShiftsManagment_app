import './profile.css';
import { useContext } from "react";
import { UserProvider } from "../../../context/UserContext";
import UserDetails from "./UserDetails";
import ExistTurn from './ExistTurns';
const Profile = () => {
    const { user } = useContext(UserProvider);
    return (
        <div className="profile">
            <ExistTurn userData={user} />
            <UserDetails userData={user} />
        </div>
    )
}
export default Profile;