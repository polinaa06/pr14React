import s from './Banner.module.css'
import { Header } from '../Header/Header'

export function Banner() {
    return(
        <div className={s.banner}>
            <Header/>
            <div className={s.content}>
                <button className={s.btn}>О компании <span className={s.blue}>Автоторг</span></button>
            </div>
        </div>
    )
}