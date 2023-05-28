import './ProductViewPage.scss';
import ProductSlider from '../../shared/ProductSlider/ProductSlider';
import ProductView from './components/ProductView/ProductView';

export const ProductViewPage = () => {
  return (
    <>
      <ProductView />
      <ProductSlider />
    </>
  );
};

export default ProductViewPage;
