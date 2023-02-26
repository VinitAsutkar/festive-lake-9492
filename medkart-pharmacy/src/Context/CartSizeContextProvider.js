import axios from "axios";
import { createContext, useState } from "react";

export const CartSizeContext=createContext();
const CartSizeContextProvider=({children})=>{
  const [CartSize,SetCartSize]=useState(0);
  const CheckCartSize=()=>{
    axios.get(`http://localhost:3000/cart`).then((Response)=>SetCartSize(Response.data.length))
  }
  return <CartSizeContext.Provider value={{CartSize,CheckCartSize}}>{children}</CartSizeContext.Provider>
}
export {CartSizeContextProvider}