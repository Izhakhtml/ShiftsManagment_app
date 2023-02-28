import { useEffect, useState } from 'react';
import './admin.css'
const ClientDeterminatedTurn = ({ userData }) => {
    const [image, setImage] = useState("")
    useEffect(() => {
        fetch(`http://localhost:8080/${userData.userObject.image}`)
            .then((data) => {
                setImage(data)
            }
            )
            .catch((rej) => console.log(rej))
    }, [])
    console.log(image);
    return (
        <div className='clientDetails'>
            <img src={image.url || "sdd"} alt="" />
            <article>
                <h3>{userData.userObject.userName}  שם פרטי</h3>
                <h3>{userData.userObject.phoneNumber} מספר טלפון</h3>
                <h3>{userData.selectedDay} תאריך</h3>
                <h3>בין השעות {userData.startHour} ל {userData.endHour}</h3>
            </article>
        </div>
    )
}
export default ClientDeterminatedTurn;