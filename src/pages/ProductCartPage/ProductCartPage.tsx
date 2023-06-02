import './ProductCartPage.scss';
import CartTotal from './components/CartTotal/CartTotal';
import ProductCart from './components/ProductCart/ProductCart';
import React, { useState } from 'react';
import plant1 from '../HomePage/components/PlantCard/assets/LeftCardImage.png';

export const ProductCartPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: plant1,
      title: 'Barberton Daisy',
      price: 119.0,
      quantity: 1,
    },
    {
      id: 2,
      image: plant1,
      title: 'Another Product',
      price: 99.0,
      quantity: 1,
    },
  ]);

  const increaseQuantity = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      }),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      }),
    );
  };

  const removeProduct = (productId: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <div className="wrapper">
        <ProductCart
          products={products}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeProduct={removeProduct}
        />
        <CartTotal totalPrice={totalPrice} quantity={totalQuantity} />
      </div>
    </>
  );
};

export default ProductCartPage;
