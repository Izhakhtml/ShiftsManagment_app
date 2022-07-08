import { useContext, useState } from 'react'
import { UserProvider } from '../../../context/UserContext';
import { REGISTER } from '../../../services/userService'
import RegisterTemplate from './RegisterTemplate'
const Register = () => {
    const [newUser, setNewUser] = useState({});
    const {user ,setUser} = useContext(UserProvider)
    const InputValue = (e) => {
        newUser[e.target.name] = e.target.value;
        setNewUser(newUser)
    }
    const CreateNewUser = () => {
        REGISTER(newUser)
            .then(data => console.log(data))
            .catch(reject => console.log(reject))
    }
    return (
        <>
            <RegisterTemplate InputValue={InputValue} CreateNewUser={CreateNewUser} />
        </>
    )
}
export default Register;