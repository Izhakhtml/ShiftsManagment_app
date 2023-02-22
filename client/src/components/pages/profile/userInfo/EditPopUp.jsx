import { useContext, useEffect, useState } from "react";
import { EDIT, GetById } from "../../../../services/userService";
import { UserProvider } from '../../../../context/UserContext'
import { CalenderProvider } from "../../../../context/CalenderContext";
import axios from 'axios'
import Loading from '../../../../loading/loading'
const EditPopUp = ({ ClosePopUp, userData }) => {
    const editProfile = {};
    const [editImagePro, setEditImagePro] = useState("");
    const [PrvImage, setPrvImage] = useState("");
    const { user, setUser } = useContext(UserProvider);
    const { isLoading, setIsLoading } = useContext(CalenderProvider);

    const InputValue = (e) => {
        const { name, value } = e.target;
        name == 'image' ?
            editProfile['image'] = e.target.files[0] :
            editProfile[name] = value;

        user['userName'] = editProfile.userName || user.userName;
        user['phoneNumber'] = editProfile.phoneNumber || user.phoneNumber;
        user['image'] = editProfile.image || user.image;
    }
    const SendEditProfile = async (e) => {
        e.preventDefault()
        if (window.confirm(`אתה בטוח שאתה רוצה לעדכן את הנתונים?`)) {
            const data = new FormData();
            setIsLoading(true);
            data.append('userName', editProfile.userName || user.userName);
            data.append('phoneNumber', editProfile.phoneNumber || user.phoneNumber);
            data.append('image', editProfile.image || user.image);
            await axios.put(`http://localhost:8080/user/${user._id}`, data)
                .then((data) => {
                    setPrvImage(data.data.image);
                    setEditImagePro(editProfile);
                })
                .catch(reject => console.error(reject))
                .finally(() => setIsLoading(false))
            localStorage.setItem('userObject', JSON.stringify(user))
            setUser(JSON.parse(localStorage.getItem('userObject')))

        }
    }
    useEffect(() => {
        if (PrvImage != "") {
            console.log(PrvImage, "   ", editImagePro);
            if (editImagePro.image) {
                if (PrvImage.substr(PrvImage.indexOf('-') + 1) != editImagePro.image.name && editImagePro != "") {
                    GetById(user._id)
                        .then(data => {
                            localStorage.setItem('userObject', JSON.stringify(data));
                            setUser(JSON.parse(localStorage.getItem('userObject')));
                            window.localStorage.setItem('image', `http://localhost:8080/${data.image}`);
                            setEditImagePro("");
                            setPrvImage("");
                        }
                        ).catch((rej) => console.log(rej))
                }
            } else {
                setEditImagePro("");
                setPrvImage("");
                console.log("out");
            }
        }
    }, [PrvImage])
    return (
        <div className='edit_userProfile'>
            {isLoading ? <Loading type='spin' color='black' /> : ""}
            <form encType='multipart/form-data'>
                <h2 onClick={ClosePopUp}>X</h2>
                <h1>ערוך פרופיל</h1>
                <label htmlFor="">User name:</label><br />
                <input onChange={InputValue} type="text" defaultValue={userData.userName} name='userName' /><br />
                <label htmlFor="">Phone number</label><br />
                <input onChange={InputValue} type="text" defaultValue={userData.phoneNumber} name='phoneNumber' /><br />
                <label htmlFor="">Image:</label><br />
                <input onChange={InputValue} type="file" name='image' /><br />
                <button onClick={SendEditProfile}>SEND</button>
            </form>
        </div>
    )
}
export default EditPopUp;