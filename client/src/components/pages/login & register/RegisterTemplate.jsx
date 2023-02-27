import './style.css'
import { FaQuestionCircle } from 'react-icons/fa'
const RegisterTemplate = ({ InputValue, CreateNewUser }) => {
    return (
        <form action='#' encType='multipart/form-data'>
            <div className='register_countainer'>
                <label htmlFor="">USER NAME:</label> <br />
                <input className='input_register' onChange={InputValue} type="text" name="userName" placeholder='Full name' />
                <FaQuestionCircle className='fullName_icon' />
                <span className='fullName_remark_text'> שם המשתמש חייב להיות יותר מ-3 תווים</span>
                <br />
                <label htmlFor="">PASSWORD:</label> <br />
                <input className='input_register' onChange={InputValue} type="text" name="password" placeholder='Password' />
                <FaQuestionCircle className='password_icon' />
                <span className='password_remark_text'>הקוד חייב להיות יותר מ-3 תווים</span>
                <br />
                <label htmlFor="">PHONE NUMBER:</label> <br />
                <input className='input_register' onChange={InputValue} type="text" name="phoneNumber" placeholder='Phone number' />
                <FaQuestionCircle className='phoneNumber_icon' />
                <span className='phoneNumber_remark_text'>מספר הטלפון חייב להיות יותר מ-9 מספרים</span>
                <br />
                <label for="isAdmin">CONNECT AS:</label>
                <br />
                <select id="isAdmin" onChange={InputValue} name='isAdmin'>
                    <option value="Client">Client</option>
                    <option value="Admin">Admin</option>
                </select>
                <br />
                <label htmlFor="">CHOOSE IMAGE:</label> <br />
                <input className='input_register' onChange={InputValue} type="file" name="image" placeholder='Choose image' /> <br />
                <button onClick={CreateNewUser}>REGISTER</button>
            </div>
        </form>
    )
}
export default RegisterTemplate;