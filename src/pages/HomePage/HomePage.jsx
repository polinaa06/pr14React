import { Accordeon } from '../../components/Accordeon/Accordeon'
import { Banner } from '../../components/Banner/Banner'
import { SliderElem } from '../../components/SliderElem/SliderElem'

export function HomePage(){
    return(
        <section>
            <Banner/>
            <SliderElem/>
            <Accordeon/>
        </section>
    )
}