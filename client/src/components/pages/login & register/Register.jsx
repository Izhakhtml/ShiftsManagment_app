import { useState } from 'react'
import { registerValidation4 } from '../../../validation/registerInputs'
import RegisterTemplate from './RegisterTemplate'
import axios from 'axios'
const Register = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [pho, setPho] = useState('');
    const [img, setImg] = useState('');
    const [isAdmin, setIsAdmmin] = useState(null)
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
            case 'isAdmin':
                return setIsAdmmin(e.target.value)
            default:
                return console.log("error register");
        }
    }
    const CreateNewUser = async (e) => {
        e.preventDefault()
        let nameBool = false;
        let passBool = false;
        let numBool = false;
        if (registerValidation4(e.target.form[0], 3)) nameBool = true;
        if (registerValidation4(e.target.form[1], 3)) passBool = true;
        if (registerValidation4(e.target.form[2], 9)) numBool = true;
        if (nameBool && passBool && numBool) {
            const data = new FormData();
            data.append("userName", name);
            data.append("password", pass);
            data.append("phoneNumber", pho);
            data.append("image", img);
            data.append('isAdmin',isAdmin)
            console.log(isAdmin);
            await axios.post('http://localhost:8080/user/register', data)
                .then(data => {
                    if (data) {
                        alert(`הנתונים שלך נשמרו במערכת בהצלחה!\n אתה רשאי להתחבר!`)
                    }
                })
                .catch(rej => alert(rej.response.data.message))

        } else {
            console.log("out");
        }
    }

    return (
        <div >
            <RegisterTemplate InputValue={InputValue} CreateNewUser={CreateNewUser} />
        </div>
    )
}
export default Register;