import '../../App.css';
import { Link } from "react-router-dom";
import { UserProvider } from '../../context/UserContext';
import { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi'
const Header = () => {
    const { user, setUser,isLogin ,setIsLogin } = useContext(UserProvider)
    const Logout = () => {
        setUser({})
        setIsLogin(false)
        localStorage.setItem('userObject', {})
    }
    return (
        <div className='Header_tag'>
            {
                user.userName != undefined ?
                    <>
                        <Link to="/settingShift"><button>Setting Shift</button></Link>
                        <Link to="/"><button>Profile</button></Link>
                        <Link to="/"><button onClick={Logout}><FiLogOut /></button></Link>
                    </> : ""
            }
        </div>
    )
}
export default Header;