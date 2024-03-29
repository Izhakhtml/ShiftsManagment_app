import '../../../App.css'
import './style.css'
import Register from './Register'
import Login from './Login'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const ContainAll = () => {
    const [bool, setBool] = useState(false)
    const ChangeToRegister = () => { setBool(true) }
    const ChangeToLogin = () => { setBool(false) }
    return (
        <div className='contoin_all'>
            <button className='switching_between_compo'  onClick={ChangeToRegister}>REGISTER</button>
            <button className='switching_between_compo' onClick={ChangeToLogin}>LOGIN</button>
            <div>

            {bool ? <Register /> : <Login />}
            </div>
        </div>
    )
}
export default ContainAll;