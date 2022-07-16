import { useContext, useState } from 'react'
import { UserProvider } from '../../../context/UserContext'
import { LOGIN } from '../../../services/userService'
import LoginTemplate from './LoginTemplate'
const Login = () => {
    const [loginUser, setLoginUser] = useState({})
    const { setUser , setIsLogin} = useContext(UserProvider)
    const InputValue = (e) => {
        loginUser[e.target.name] = e.target.value;
        setLoginUser(loginUser)
    }
    const UserLogin = () => {
        LOGIN(loginUser)
            .then(data => {
                console.log(data.message);
                if (data.message != 'one of the details is incorrect') {
                    setUser(data.data)
                    setIsLogin(true)
                    localStorage.setItem('isConnected',true)
                    localStorage.setItem('userObject', JSON.stringify(data.data))

                } else {
                    alert(data.message)
                }
            }).catch(reject => { return reject })
    }
    return (
        <>
            <LoginTemplate InputValue={InputValue} UserLogin={UserLogin} />
        </>
    )
}
export default Login;