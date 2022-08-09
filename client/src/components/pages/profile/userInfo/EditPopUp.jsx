import { useContext, useState } from "react";
import { EDIT } from "../../../../services/userService";
import { UserProvider } from '../../../../context/UserContext'
import { CalenderProvider } from "../../../../context/CalenderContext";
import axios from 'axios'
import Loading from '../../../../loading/Loading'
const EditPopUp = ({ ClosePopUp, userData }) => {
    const editProfile = {};
    const { user, setUser } = useContext(UserProvider);
    const { isLoading, setIsLoading } = useContext(CalenderProvider);
console.log(user);
    const InputValue = (e) => {
        const { name, value } = e.target;
        editProfile[name] = value;
        user['userName'] = editProfile.userName || user.userName;
        user['image'] = editProfile.image || user.image;
    }
    const SendEditProfile = () => {
        if (window.confirm(`אתה בטוח שאתה רןצה לעדכן את הנתונים?`)) {
            setIsLoading(true);
            EDIT(user._id, editProfile)
                .then(() => console.log("data"))
                .catch(reject => console.error(reject))
                .finally(() => setIsLoading(false))
            localStorage.setItem('userObject', JSON.stringify(user))
            setUser(JSON.parse(localStorage.getItem('userObject')))
        }
    }
    return (
        <div className='edit_userProfile'>
            {isLoading ? <Loading type='spin' color='black' /> : ""}
            <h2 onClick={ClosePopUp}>X</h2>
            <h1>ערוך פרופיל</h1>
            <label htmlFor="">User name:</label><br />
            <input onChange={InputValue} type="text" defaultValue={userData.userName} name='userName' /><br />
            <label htmlFor="">Image:</label><br />
            <input onChange={InputValue} type="text" defaultValue={userData.image} name='image' /><br />
            <button onClick={SendEditProfile}>SEND</button>
        </div>
    )
}
export default EditPopUp;