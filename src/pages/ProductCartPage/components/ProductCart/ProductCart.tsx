import './ProductCart.scss';
import React from 'react';
import decrease_button from './assets/decrease-button.svg';
import increase_button from './assets/increase-button.svg';
import remove_button from './assets/Delete.svg';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface ProductProps {
  product: Product;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const ProductComponent: React.FC<ProductProps> = ({
  product,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  return (
    <div className="products-container" key={product.id}>
      <div className="img">
        <img src={product.image} alt="" />
      </div>
      <span className="title">{product.title}</span>
      <span className="price">${product.price}</span>
      <div className="quantity">
        <button onClick={() => decreaseQuantity(product.id)}>
          {' '}
          <img src={decrease_button} alt="/" />{' '}
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => increaseQuantity(product.id)}>
          {' '}
          <img src={increase_button} alt="/" />{' '}
        </button>
      </div>
      <span className="total-price">${(product.price * product.quantity).toFixed(2)}</span>
      <button className="remove-button" onClick={() => removeProduct(product.id)}>
        {' '}
        <img src={remove_button} alt="" />{' '}
      </button>
    </div>
  );
};

interface ProductCartProps {
  products: Product[];
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const ProductCart: React.FC<ProductCartProps> = ({
  products,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  return (
    <div className="container">
      <div className="top">
        <span>Products</span>
        <span className="price-title">Price</span>
        <span className="quantity-title">Quantity</span>
        <span className="total-title">Total</span>
      </div>
      <div className="line"></div>
      {products.map((product: Product) => (
        <ProductComponent
          key={product.id}
          product={product}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductCart;
