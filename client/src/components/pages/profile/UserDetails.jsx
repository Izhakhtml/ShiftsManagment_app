import './profile.css';
const UserDetails = ({ userData }) => {
    return (
        <div className='pro_details'>
            <img src={userData.image} alt="" />
            <h1>{userData.userName}</h1>
            <button onClick={() => console.log("availableTurns")}>ssss</button>
        </div>
    )
}
export default UserDetails;