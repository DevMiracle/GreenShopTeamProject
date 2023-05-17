import './HomePage.scss';
import { ProductsPart } from './components/ProductsPart/ProductsPart';
import HeroPart from './components/HeroPart/HeroPart';
import PlantCard from './components/PlantCard/PlantCard';

export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <ProductsPart />
      <PlantCard />
    </>
  );
};

export default HomePage;
