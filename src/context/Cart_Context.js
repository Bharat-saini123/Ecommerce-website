import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../components/reducers/CartReducer"

const CartContext=createContext();
const getLocalCartData=()=>{
let newLocalData=localStorage.getItem("sainItem");
if(newLocalData===[]){
    return [];
}
else{
    return JSON.parse(newLocalData);
}


}

const initialstate={

    // cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:50000,
}
const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialstate);


    const addToCart=(id,initialcolor,amount,product)=>{
         dispatch({type:"ADD_TO_CART",payload:{id,initialcolor,amount,product}})

    }

    const removeCartItem=(id)=>{
        dispatch({type:"REMOVE_CART_ITEM",payload:id})



    }
    const clearCartAll=()=>{


        dispatch({type:"CLEAR_ALL_CART"})
    }
    useEffect(()=>{


        localStorage.setItem("sainItem",JSON.stringify(state.cart))
    },[state.cart])


    return <CartContext.Provider value={{...state,addToCart,removeCartItem,clearCartAll}}>

{children}

    </CartContext.Provider>
}


const useCartContext=()=>{


    return useContext(CartContext);
}
export {CartProvider,useCartContext}