import { useParams } from 'react-router-dom'
import s from './ProductPage.module.css'
import { Header } from '../../components/Header/Header'
import { tovars } from '../../data/data';
import { Link } from 'react-router-dom';

export function ProductPage() {
    const {id} = useParams();
    const tovar = tovars.find(tovar => tovar.id == id);
    return (
        <section>
            <Header/>
            <div className={s.product}>
                <Link to="/catalog" className={s.btn_grey}>На главную</Link>

                <div className={s.content}>
                    <div className={s.img}>
                        <img src={tovar.image} alt="" />
                    </div>

                    <div className={s.info}>
                        <h2>{tovar.name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ducimus iusto facere adipisci enim! Iure, quibusdam velit doloremque commodi explicabo illo corrupti dolore, reiciendis, provident nostrum aliquid asperiores fugiat tenetur earum quia delectus veniam tempore soluta dolorem distinctio! Quod officia magni debitis fuga non rerum unde modi voluptates itaque accusamus quibusdam ad saepe voluptatum, alias doloribus, veniam delectus distinctio cupiditate. Assumenda exercitationem quod quia, aperiam, excepturi aspernatur rem eligendi ipsa modi esse consequuntur inventore accusantium, porro sit mollitia numquam. Unde nobis tenetur repellat excepturi iure, maiores voluptate sed veniam facere eaque. Accusantium tenetur laborum ipsam quo qui ipsum dolorem ex.</p>
                        <div className={s.block}>
                            <h3>{tovar.price} ₽</h3>
                            <button className={s.btn}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}