import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import {AiFillDelete} from "react-icons/ai";
import { useCartContext } from "../context/Cart_Context";


const CartItems = ({ id, image, initialcolor, max, name, price, amount }) => {
const {removeCartItem}=useCartContext();

    const cartDecrease=()=>{
        // amount>1?setAmount(amount-1):setAmount(1)
        
            }
      const cartIncrease=()=>{
        // amount<stock?setAmount(amount+1):setAmount(stock)
  
  
      } 
  return (
    <div className="cart-total-products-heading" >
      <div className="cart-image-product-box " >
        <figure style={{ width: "30px", height: "30px" }}>
          <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
        </figure>

        <div className="price-colors">
          <div className="price-name-items" style={{ fontSize: "1.3rem" ,textTransform:"capitalize",fontSize:"1.3rem"}}>
            {name}
          </div>
          <div
            className="cart-color" 
            style={{fontSize:"1.5rem"}}
            >
            color :
            <h4
              style={{
                backgroundColor: initialcolor,
                color: initialcolor,
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                fontSize: "0.0000001rem",
              }}
            >
              {initialcolor}
            </h4>
          </div>
        </div>
      </div>

      <div className="cart-items-price cart-hide" style={{fontSize:"1.5rem"}}>
      <FormatPrice price={price} />
      </div>

      <div className="cart-items-quantity">
      <CartAmountToggle amount={amount} cartIncrease={cartIncrease} cartDecrease={cartDecrease}/>
      </div>

      <div className="my-carts-sub-total" style={{fontSize:"1.5rem"}}>
        <FormatPrice price={price*amount}/>
      </div>
      <div className="cart-items-icon">
    <AiFillDelete style={{fontSize:"2.5rem",color:"red" ,cursor:"pointer"}} onClick={()=>removeCartItem(id)}/> 
      </div>

    </div>
  );
};

export default CartItems;
