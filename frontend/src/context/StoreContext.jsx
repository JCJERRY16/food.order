import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import Carts from "../pages/carts/Carts";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in Carts ) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    getTotalCartAmount
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
