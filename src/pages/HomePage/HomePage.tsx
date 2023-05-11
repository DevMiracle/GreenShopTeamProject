import './HomePage.scss'
import HeroPart from './components/HeroPart/HeroPart';
import { ProductsPart } from './components/ProductsPart/ProductsPart';

export const HomePage = () => {
    return (
        <>
        <HeroPart />
        <ProductsPart />

        </>
    );
}

export default HomePage