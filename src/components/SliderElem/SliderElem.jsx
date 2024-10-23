import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './SliderElem.module.css';
import Slider from "react-slick";
import { Item } from "../Item/Item";
import { tovars } from '../../data/data'

export function SliderElem() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className={s.slider_block}>
            <h2>Популярные товары</h2>
            <div className={s.slider}>
                <Slider {...settings}>
                    {
                        tovars.slice(0, 6).map((tovar) => {
                            return (
                                <div>
                                    <Item id={tovar.id} image={tovar.image} name={tovar.name} price={tovar.price} count={tovar.count} />
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </div>
    );
}