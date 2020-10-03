import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderType = {
    login: string | null
    isAuth: boolean
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img
                src='https://www.epicentrofestival.com/wp-content/uploads/2019/12/zen-buddhism-drawing-circle-logo-hd-hakuinampaposs-circle-circle-of-life-chine-720x736.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;