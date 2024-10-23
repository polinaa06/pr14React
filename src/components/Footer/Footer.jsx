import s from './Footer.module.css'
import { NavLink } from 'react-router-dom'

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.content}>
                <div className={s.logo}></div>

                <div className={s.nav}>
                    <NavLink className={s.navlink} to="/">Главная</NavLink>
                    <NavLink className={s.navlink} to="/catalog">Каталог</NavLink>
                </div>
            </div>
        </footer>
    )
}