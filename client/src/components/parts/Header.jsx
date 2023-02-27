import '../../App.css';
import { Link } from "react-router-dom";
import { UserProvider } from '../../context/UserContext';
import { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi'
const Header = () => {
    const { user, setUser, isLogin, setIsLogin } = useContext(UserProvider)
    const Logout = () => {
        setUser({})
        setIsLogin(false)
        window.localStorage.removeItem('image');
        localStorage.setItem('userObject', undefined);
        localStorage.setItem('isConnected', false);
    }
    return (
        <div className='Header_tag'>
            {
                user.userName != undefined ?
                    <>
                        <Link to="/settingShift"><button>קביעת תורים</button></Link>
                        <Link to="/"><button>איזור אישי</button></Link>
                        <Link className='logoutBtn' to="/"><button onClick={Logout}><FiLogOut /></button></Link>
                    </> : ""
            }
        </div>
    )
}
export default Header;