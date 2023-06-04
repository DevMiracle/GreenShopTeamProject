import './CartPage.scss';
import { ShoppingCart } from './components/ShoppingCart';
import ProductSlider from '../../shared/ProductSlider/ProductSlider';

export const CartPage = () => {
  return (
    <>
      <ShoppingCart />
      <ProductSlider />
    </>
  );
};

export default CartPage;
