import '../../../App.css'
import './style.css'
import Register from './Register'
import Login from './Login'
import { useState } from 'react'
const ContainAll = () => {
    const [bool, setBool] = useState(false)
    const ChangeToRegister = () => { setBool(true) }
    const ChangeToLogin = () => { setBool(false) }
    return (
        <div className='contoin_all'>
            <button className='switching_between_compo'  onClick={ChangeToRegister}>REGISTER</button>
            <button className='switching_between_compo' onClick={ChangeToLogin}>LOGIN</button>
            {bool ? <Register /> : <Login />}
        </div>
    )
}
export default ContainAll;