import './CartTotal.scss';
import React, { useEffect, useState } from 'react';

interface CartTotalProps {
  totalPrice: number;
  quantity: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalPrice, quantity }) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);

  useEffect(() => {
    if (couponCode === 'DISCOUNT10') {
      setCouponDiscount(totalPrice * 0.1 * quantity);
    } else {
      setCouponDiscount(0);
    }
  }, [couponCode, totalPrice, quantity]);

  const applyCoupon = () => {
    if (couponCode === 'ANTOSHKA') {
      setCouponDiscount(totalPrice * 0.1 * quantity);
    } else {
      setCouponDiscount(0);
    }
  };

  return (
    <div className="cart-total-container">
      <div className="cart-total-title">Cart Totals</div>
      <div className="cart-total-line"></div>
      <div className="cart-total-main">
        <span className="coupon">Coupon Apply</span>
        <div className="form">
          <input
            placeholder="Enter coupon code here..."
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="coupon_button" onClick={applyCoupon}>
            Apply
          </button>
        </div>
        <div className="price-part">
          <div className="prices">
            Subtotal <span className="price">${totalPrice.toFixed(2)}</span>{' '}
          </div>
          <div className="coupon-discount">
            Coupon Discount <span>(-) ${couponDiscount.toFixed(2)}</span>
          </div>
          <div className="prices">
            Shipping{' '}
            <span className="price">
              $10.00 <a href="/">View shipping charge</a>
            </span>
          </div>
          <div className="total-price">
            Total <span className="total-price-color">${(totalPrice + 10 - couponDiscount).toFixed(2)}</span>
          </div>
          <div className="buttons">
            <button className="checkout-button">Proceed To Checkout</button>
            <a href="/">Continue Shopping</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
