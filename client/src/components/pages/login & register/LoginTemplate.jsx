import './style.css'
const LoginTemplate = ({InputValue , UserLogin }) => { 
return (
    <div className='login_countair'>
        <label htmlFor="" >USER NAME</label><br />
        <input className='input_text' onChange={InputValue} type="text" name="userName" /><br />
        <label htmlFor="">PASSWORD</label><br />
        <input className='input_password' onChange={InputValue} type="text" name="password" /><br />
        <button onClick={UserLogin}>LOGIN</button>
    </div>
)
}
export default LoginTemplate;