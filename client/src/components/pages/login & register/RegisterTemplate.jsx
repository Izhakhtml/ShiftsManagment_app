import './style.css'
const RegisterTemplate = ({ InputValue, CreateNewUser ,InputFocus}) => {
    return (
        <form action='#' encType='multipart/form-data'>
            <div className='register_countair'>
                <label htmlFor="">USER NAME</label> <br />
                <input className='input_register' onFocus={InputFocus} onChange={InputValue} type="text" name="userName" placeholder='Full name' /> <br />
                <label htmlFor="">PASSWORD</label> <br />
                <input className='input_register' onFocus={InputFocus} onChange={InputValue} type="text" name="password" placeholder='Password' /> <br />
                <label htmlFor="">PHONE NUMBER</label> <br />
                <input className='input_register' onFocus={InputFocus} onChange={InputValue} type="text" name="phoneNumber" placeholder='Phone number' /> <br />
                <label htmlFor="">IMAGE</label> <br />
                <input className='input_register' onFocus={InputFocus} onChange={InputValue} type="file" name="image" placeholder='Choose image' /> <br />
                <button onClick={CreateNewUser}>REGISTER</button>
            </div>
        </form>
    )
}
export default RegisterTemplate;