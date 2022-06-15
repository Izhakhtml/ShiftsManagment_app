import '../../App.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='Header_tag'>

            <Link to="/settingShift"><button>Setting Shift</button></Link>
            <Link to="/"><button>Profile</button></Link>
        </div>
    )
}
export default Header;