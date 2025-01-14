import React, { useState, createContext } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a CartProvider to wrap your app with the context
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);  // Default value is an empty array

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};
