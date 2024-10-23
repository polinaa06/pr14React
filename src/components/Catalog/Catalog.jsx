import s from './Catalog.module.css'
import { Item } from '../Item/Item'
import { tovars } from '../../data/data'
import { Search } from '../Search/Search';
import { useState } from "react";

export function Catalog() {
    const [query, setQuery] = useState('')
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function sort(e) {
        setSorting(e.target.value);
    }
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredProducts = tovars.filter((tovars) => {
        return tovars.name.toLowerCase().includes(query.toLowerCase())
        &&
        (tovars.category == category || category == 0);
    });
    const sortProducts = (sorting, tovars) => {
        switch (sorting) {
            case 'price_asc':
                return [...tovars].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...tovars].sort((a, b) => b.price - a.price);
            default:
                return tovars;
        }
    };
    const sortedFilteredProducts = sortProducts(sorting, filteredProducts);
    return (
        <div className={s.catalog}>
            <div className={s.content}>
                <h2>Каталог товаров</h2>

                <div className={s.catalog_inner}>
                    <div className={s.categories}>
                        <p>Категории:</p>
                        <div className={s.categories_btn}>
                            <button onClick={()=>setCategory(0)} className={s.btn}>Все товары</button>
                            <button onClick={()=>setCategory(1)} className={s.btn}>Аксессуары</button>
                            <button onClick={()=>setCategory(2)} className={s.btn}>Масла</button>
                            <button onClick={()=>setCategory(3)} className={s.btn}>Ароматизаторы</button>
                        </div>
                    </div>

                    <div className={s.categories_block}>
                        <select onChange={sort} className={s.sort}>
                            <option value="price_asc">По возрастанию</option>
                            <option value="price_desc">По убыванию</option>
                        </select>

                        <Search handleChange={handleChange} />
                    </div>

                </div>



                <div className={s.block}>

                    <div className={s.items}>
                        {
                            sortedFilteredProducts.length ?
                                sortedFilteredProducts.map((tovar) => {
                                    return (
                                        <Item id={tovar.id} image={tovar.image} name={tovar.name} price={tovar.price} count={tovar.count} />
                                    )
                                })
                                :
                                <p className={s.error}>Не найдено ничего по запросу "{query}"</p>

                        }
                    </div>

                </div>

                <div className={s.catalog_button}>
                    <button className={s.catalog_btn}>Загрузить еще товары</button>
                </div>
            </div>
        </div>
    )
}