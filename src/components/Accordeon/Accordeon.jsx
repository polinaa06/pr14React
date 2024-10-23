import s from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'
export function Accordeon() {
    return (
        <div className={s.accordeon_block}>
            <h2>Часто задаваемые вопросы</h2>
            <div className={s.accordeon}>
                <AccordeonItem title='title 1' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae mollitia unde incidunt error voluptate ducimus perspiciatis voluptatum porro veritatis?' />
                <AccordeonItem title='title 2' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae mollitia unde incidunt error voluptate ducimus perspiciatis voluptatum porro veritatis?' />
                <AccordeonItem title='title 3' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae mollitia unde incidunt error voluptate ducimus perspiciatis voluptatum porro veritatis?' />
                <AccordeonItem title='title 4' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae mollitia unde incidunt error voluptate ducimus perspiciatis voluptatum porro veritatis?' />
            </div>
        </div>
    )
}