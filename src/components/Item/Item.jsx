import s from './Item.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { OrderModal } from '../OrderModal/OrderModal'

export function Item({ id, image, name = 'Неизвестно', price = '0', count }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal(){
        setModalIsOpen(true);
    }
    return (
        <>
            <div className={s.item}>
                <div className={s.img}>
                    <img src={image} alt="" />
                </div>

                <div className={s.text}>
                    <p>{name}</p>
                </div>

                <div className={s.block}>
                    <div className={s.price}>
                        <h2>{price}</h2>
                        <p>₽</p>
                    </div>
                    {
                        count > 0 ?
                            <Link to={`${id}`} className={s.btn}>Добавить в корзину</Link>
                            :
                            <button onClick={showModal} className={s.btn}>Заказать</button>
                    }

                </div>
            </div>
            <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </>
    )
}