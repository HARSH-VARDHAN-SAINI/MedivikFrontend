import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Try to load cart from local storage on initial mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Failed to parse cart from local storage", error);
        return [];
      }
    }
    return [];
  });

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity
        };
        return newItems;
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          // If new quantity is less than 1, we return 0 but filter it out later
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0); // This fixes the "not decreasing after 1" issue by removing the item when it goes below 1
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const mrpTotal = cartItems.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
  const discountTotal = cartItems.reduce((sum, item) => sum + ((item.mrp - item.price) * item.quantity), 0);
  const subtotal = mrpTotal - discountTotal;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    mrpTotal,
    discountTotal,
    subtotal,
    shipping,
    total
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
