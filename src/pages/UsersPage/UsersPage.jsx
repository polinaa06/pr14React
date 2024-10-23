import s from './UsersPage.module.css'
import { Header } from '../../components/Header/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import { Search } from '../../components/Search/Search'

export function UsersPage() {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formData
        });
        e.target.reset();
        setMessage('Форма отправлена')
    }

    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);


    const [query, setQuery] = useState('')
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredUsers = users.filter((users) => {
        return users.name.toLowerCase().includes(query.toLowerCase());
    })

    return (
        <>
            <Header />

            <div className={s.users}>


                <form onSubmit={handleSubmit} className={s.form}>
                    <h2>Добавить пользователя</h2>
                    <div className={s.form_input}>
                        <label htmlFor="">Введите имя пользователя</label>
                        <input type="text" placeholder='Имя пользователя' name='name' />
                    </div>
                    <button type='submit'>Отправить</button>
                    <div className="message">{message}</div>
                </form>


                <div className={s.block}>
                    <h2>Пользователи</h2>
                    <Search handleChange={handleChange} />
                </div>

                <div className={s.items}>
                    <div className={s.item_blue}>
                        <p className={s.id}>ID</p>
                        <p className={s.name}>Имя</p>
                        <p className={s.nickname}>Имя пользователя</p>
                        <p className={s.email}>Электронная почта</p>
                        <p className={s.city}>Город</p>
                    </div>

                    {
                        filteredUsers.length ?
                            filteredUsers.map((users) => {
                                return (
                                    <div className={s.item}>
                                        <p className={s.id}>{users.id}</p>
                                        <p className={s.name}>{users.name}</p>
                                        <p className={s.nickname}>{users.username}</p>
                                        <p className={s.email}>{users.email}</p>
                                        <p className={s.city}>{users.address.city}</p>
                                    </div>
                                )
                            })
                            :
                            <p className={s.error}>Не найдено ничего по запросу "{query}"</p>
                    }

                </div>
            </div>
        </>
    )
}