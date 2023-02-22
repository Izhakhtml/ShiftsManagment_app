import { useContext, useState } from 'react'
import { CalenderProvider } from '../../../context/CalenderContext'
import { UserProvider } from '../../../context/UserContext'
import Loading from '../../../loading/loading'
import { LOGIN } from '../../../services/userService'
import LoginTemplate from './LoginTemplate'
const Login = () => {
    const [loginUser, setLoginUser] = useState({})
    const { setIsLoading } = useContext(CalenderProvider);
    const { setUser, isLoading } = useContext(UserProvider)
    const InputValue = (e) => {
        loginUser[e.target.name] = e.target.value;
        setLoginUser(loginUser)
    }
    const UserLogin = async () => {
        setIsLoading(true);
        await LOGIN(loginUser)
            .then(data => {
                console.log(data.message);
                if (data.message != 'one of the details is incorrect') {
                    setUser(data.data)
                    localStorage.setItem('isConnected', true)
                    localStorage.setItem('userObject', JSON.stringify(data.data))

                } else {
                    alert(data.message)
                }
            }).catch(reject => { return reject })
            .finally(() => setIsLoading(false))
    }
    return (
        <>
            {isLoading ? <Loading type='spin' color='black' /> : ""}
            <LoginTemplate InputValue={InputValue} UserLogin={UserLogin} />
        </>
    )
}
export default Login;