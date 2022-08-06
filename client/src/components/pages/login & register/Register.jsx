import { useContext, useState } from 'react'
import { UserProvider } from '../../../context/UserContext';
import { REGISTER } from '../../../services/userService'
import RegisterTemplate from './RegisterTemplate'
import axios from 'axios'
const Register = () => {
    const [newUser, setNewUser] = useState({});
    const [image, setImage] = useState({});
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [pho, setPho] = useState('');
    const [img, setImg] = useState('');
    const { user, setUser } = useContext(UserProvider)
    const InputValue = (e) => {
        switch (e.target.name) {
            case 'userName':
                return setName(e.target.value)
            case 'password':
                return setPass(e.target.value)
            case 'phoneNumber':
                return setPho(e.target.value)
            case 'image':
                return setImg(e.target.files[0])
            default:
                return console.log("ijmi");
        }
    }
    const InputFocus = (e) => {
        // data.append(e.target.name)
    }
    const CreateNewUser = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("userName", name);
        data.append("password", pass);
        data.append("phoneNumber", pho);
        data.append("image", img);

        // axios.post('https://httpbin.org/anything', data)
           await axios.post('http://localhost:8080/user/register', data)
            // REGISTER(data)
            .then(dd => console.log(dd))
            .catch(re => console.log(re))
        // fetch('https://httpbin.org/anything', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // })
        //     .then(dd => console.log(dd))
        //     .catch(re => console.log(re))
        // fetch('https://httpbin.org/anything', data, {
        //     method: 'POST',
        // })
        //     .then(dd => console.log(dd))
        //     .catch(re => console.log(re))
        // REGISTER(newUser,data )
        // .then(data => console.log(data))
        // .catch(reject => console.log(reject))
    }
    return (
        <>
            <RegisterTemplate InputValue={InputValue} CreateNewUser={CreateNewUser} InputFocus={InputFocus} />
        </>
    )
}
export default Register;