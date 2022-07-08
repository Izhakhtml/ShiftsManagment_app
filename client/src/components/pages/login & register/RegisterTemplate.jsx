import './style.css'
const RegisterTemplate = ({ InputValue, CreateNewUser }) => {
    return (
    <div className='register_countair'>
            <label htmlFor="">USER NAME</label> <br />
            <input className='input_register' onChange={InputValue} type="text" name="userName" /> <br />
            <label htmlFor="">PASSWORD</label> <br />
            <input className='input_register' onChange={InputValue} type="text" name="password" /> <br />
            <label htmlFor="">IMAGE</label> <br />
            <input className='input_register' onChange={InputValue} type="text" name="image" /> <br />
            <label htmlFor="">PHONE NUMBER</label> <br />
            <input className='input_register' onChange={InputValue} type="text" name="phoneNumber" /> <br />
            <button onClick={CreateNewUser}>REGISTER</button>
        </div>
    )
}
export default RegisterTemplate;