import React, { useContext, useState } from 'react';
import CustomButton from '../components/UI/button/CustomButton';
import CustomInput from '../components/UI/input/CustomInput';
import './styles/Login.css'
import { AppContext } from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AppContext)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginButtonTapped = (event) => {
        event.preventDefault()
        if (login === 'admin' && password === 'admin') {
            localStorage.setItem('auth', true)
            setIsAuth(true)
        }
    }

    return (
        <form className='login-form'>
            <h1>Log in</h1>
            <CustomInput style={{ minWidth: 460 }} type="text" placeholder='Login' value={login} onChange={(e) => setLogin(e.target.value)} />
            <CustomInput style={{ minWidth: 460 }} type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <CustomButton style={{ minWidth: 460 }} onClick={loginButtonTapped}>Log in</CustomButton>
        </form>
    )
}

export default Login;