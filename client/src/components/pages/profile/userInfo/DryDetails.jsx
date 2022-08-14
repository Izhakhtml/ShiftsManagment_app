import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserProvider } from '../../../../context/UserContext';
import { GetById } from '../../../../services/userService';
import '../profile.css'
const DryDetails = ({ userData }) => {
    const [image, setImage] = useState("");
    const { user, PrvImage, setPrvImage } = useContext(UserProvider);
    useEffect(() => {
        if (window.localStorage.getItem('image')) {
            setImage(window.localStorage.getItem('image'));
        } else {
            fetch(`http://localhost:8080/${userData.image}`)
                .then((data) => {
                    window.localStorage.setItem('image', data.url);
                    setImage(data.url);
                }
                )
                .catch((rej) => console.log(rej))
        }
    }, [user])

    return (
        <div className="editInfo">
            <h1>{userData.userName}</h1>
            <img src={image} alt="" /><br />
        </div>
    )
}
export default DryDetails;