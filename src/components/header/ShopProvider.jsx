/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("http://localhost:3000/cards");
        const data = await res.data;
        setCards(data);
      } catch (error) {
        console.log("Error occurred while fetching products:", error);
      }
    };
    fetchCards();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      const itemInfo = cards.find((el) => el.id === Number(item.id));
      totalPrice += itemInfo ? itemInfo.price * item.quantity : 0;
    }
    return totalPrice;
  };

  const shopValues = {
    cartItems,
    addToCart,
    removeFromCart,
    calculateTotalPrice,
  };

  return (
    <ShopContext.Provider value={shopValues}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
