import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import CustomButton from '../button/CustomButton';
import { AppContext } from '../../../context';

const NavBar = () => {
    const { isAuth, setIsAuth } = useContext(AppContext)

    const logout = (event) => {
        event.preventDefault()
        localStorage.setItem('auth', false)
        setIsAuth(false)
    }

    return (
        <div className={classes.navbar}>
            <Link className={classes.linkContainer} to='/about' > About</Link >
            <Link className={classes.linkContainer} to='/todo'>My Todo</Link>
            <CustomButton onClick={logout}  >Log out</CustomButton>
        </div >
    )
}

export default NavBar;