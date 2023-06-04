import './HomePage.scss';
import { BlogPart } from './components/BlogPart/BlogPart';
import { ProductsPart } from './components/ProductsPart/ProductsPart';
import HeroPart from './components/HeroPart/HeroPart';
import PlantCard from './components/PlantCard/PlantCard';

export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <ProductsPart />
      <PlantCard />
      <BlogPart />
    </>
  );
};

export default HomePage;
