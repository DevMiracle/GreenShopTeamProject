import './HomePage.scss';
import { BlogPart } from './components/BlogPart/BlogPart';
import { ProductsPart } from './components/ProductsPart/ProductsPart';
import HeroPart from './components/HeroPart/HeroPart';
import PlantCard from './components/PlantCard/PlantCard';
import ProductSlider from '../../shared/ProductSlider/ProductSlider';

export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <ProductsPart />
      <PlantCard />
      <ProductSlider />
      <BlogPart />
    </>
  );
};

export default HomePage;
