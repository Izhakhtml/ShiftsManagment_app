import { useEffect } from 'react';
import { useState } from 'react';
import '../profile.css'
const DryDetails = ({ userData }) => {
    const [image, setImage] = useState("");
    useEffect(() => {
        if (window.localStorage.getItem('image')) {
            // console.log("in");
            setImage(window.localStorage.getItem('image'));
        } else {
            // console.log("out");
            fetch(`http://localhost:8080/${userData.image}`)
                .then((data) => {
                    window.localStorage.setItem('image', data.url);
                    setImage(data.url);
                }
                )
                .catch((rej) => console.log(rej))
        }
    }, [])
    return (
        <div className="editInfo">
            <h1>{userData.userName}</h1>
            <img src={image} alt="" /><br />
        </div>
    )
}
export default DryDetails;