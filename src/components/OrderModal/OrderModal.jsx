import s from './OrderModal.module.css'
import Modal from 'react-modal'

export function OrderModal({ modalIsOpen, setModalIsOpen }) {
    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <div className={s.block}>
                    <p onClick={closeModal} className={s.close}>x</p>
                    <h2>Оформить заказ</h2>
                    <form className={s.form}>
                        <div className={s.form_input}>
                            <label htmlFor="">Введите почту</label>
                            <input type="text" placeholder='Email' name='email' />
                        </div>

                        <div className={s.form_input}>
                            <label htmlFor="">Введите имя</label>
                            <input type="text" placeholder='Имя пользователя' name='name' />
                        </div>
                        <button className={s.btn} type='submit'>Оформить</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}