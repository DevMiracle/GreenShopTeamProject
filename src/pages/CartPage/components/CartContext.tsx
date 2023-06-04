import React, { createContext, useContext, useState } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
  calculateTotalPrice: () => number;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  calculateTotalPrice: () => 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingCartItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
        );
      } else {
        return [...prevCartItems, item];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    newQuantity = newQuantity < 1 ? 1 : newQuantity;
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)),
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartContextValue: CartContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotalPrice,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};
