import './ShoppingCart.scss';
import { CartItem, useCart } from './CartContext';
import React, { useState } from 'react';
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
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode === 'ANTOSHKA') {
      const totalPrice = calculateTotalPrice();
      const discountAmount = totalPrice * 0.1;
      setCouponDiscount(discountAmount);
      setDiscountApplied(true);
    }
  };

  const calculateSubtotal = () => {
    const totalPrice = calculateTotalPrice();
    const subtotal = totalPrice - couponDiscount;
    return subtotal > 0 ? subtotal.toFixed(2) : '0.00';
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    updateQuantity(id, quantity);

    if (discountApplied) {
      const totalPrice = calculateTotalPrice();
      const discountAmount = totalPrice * 0.1;
      setCouponDiscount(discountAmount);
    }
  };

  return (
    <div className="container">
      <div className="top">
        <span className="products-title">Products</span>
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
            increaseQuantity={() => handleQuantityChange(cartItem.id, cartItem.quantity + 1)}
            decreaseQuantity={() => handleQuantityChange(cartItem.id, Math.max(1, cartItem.quantity - 1))}
            removeFromCart={() => removeFromCart(cartItem.id)}
          />
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Cart Totals</p>
          <div className="line2"></div>
          <div className="cart-main">
            <p className="coupon">Coupon Apply</p>
            <div className="coupon-input">
              <input
                type="text"
                placeholder="Enter coupon code here..."
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={applyPromoCode}>Apply</button>
            </div>
            <div className="price-part">
              <div className="prices">
                <p>Total Items</p> <span>{cartItems.length}</span>
              </div>
              <div className="prices">
                <p>Subtotal</p> <span>${calculateSubtotal()}</span>
              </div>
              <div className="prices">
                <p>Coupon Discount</p> <span>(-) {couponDiscount.toFixed(2)}</span>
              </div>
              <div className="prices">
                <p>Shipping</p> <span className="shipping-price">$16.00</span>
              </div>
              <div className="shipping-fee">
                <a href="/">View shipping charge</a>
              </div>
              <div className="total-price">
                <p>Total</p> <span>${(Number(calculateSubtotal()) + 16).toFixed(2)}</span>
              </div>
            </div>
            <div className="buttons">
              <button className="checkout-button">Proceed To Checkout</button>
              <a href="/" className="continue-shopping-link">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
