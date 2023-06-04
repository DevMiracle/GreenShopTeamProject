import './ShoppingCart.scss';
import { CartItem, useCart } from './CartContext';
import React from 'react';
import remove_button from '../assets/Delete.svg';

interface CartItemProps {
  cartItem: CartItem;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({
  cartItem,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div className="products-container" key={cartItem.id}>
      <div className="img">
        <img src={cartItem.image} alt={cartItem.name} />
      </div>
      <span className="title">{cartItem.name}</span>
      <span className="price">${cartItem.price}</span>
      <div className="quantity">
        <button className="quantity-button-minus" onClick={() => decreaseQuantity(cartItem.id)}>
          {' '}
          -{' '}
        </button>
        <span>{cartItem.quantity}</span>
        <button className="quantity-button-plus" onClick={() => increaseQuantity(cartItem.id)}>
          {' '}
          +{' '}
        </button>
      </div>
      <span className="total-price">${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
      <button className="remove-button" onClick={() => removeFromCart(cartItem.id)}>
        {' '}
        <img src={remove_button} alt="" />{' '}
      </button>
    </div>
  );
};

export const ShoppingCart = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, calculateTotalPrice } = useCart();

  return (
    <div className="container">
      <div className="top">
        <span>Products</span>
        <span className="price-title">Price</span>
        <span className="quantity-title">Quantity</span>
        <span className="total-title">Total</span>
      </div>
      <div className="line"></div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((cartItem: CartItem) => (
          <CartItemComponent
            key={cartItem.id}
            cartItem={cartItem}
            increaseQuantity={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
            decreaseQuantity={() => updateQuantity(cartItem.id, Math.max(1, cartItem.quantity - 1))}
            removeFromCart={() => removeFromCart(cartItem.id)}
          />
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Cart Summary</h3>
          <p>Total Items: {cartItems.length}</p>
          <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
