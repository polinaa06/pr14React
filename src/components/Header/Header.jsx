import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export function Header() {
    return(
        <header className={s.header}>
            <div className={s.nav}>
                <NavLink to="/" className={s.navlink}>Главная</NavLink>
                <NavLink to="/catalog" className={s.navlink}>Каталог</NavLink>
                <NavLink to="/users" className={s.navlink}>Пользователи</NavLink>
            </div>

            <div className={s.logo}></div>

            <div className={s.buttons}>
                <button className={s.btn_black}>Регистрация</button>
                <button className={s.btn_blue}>Войти</button>
            </div>
        </header>
    )
}