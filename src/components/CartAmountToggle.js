import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

const CartAmountToggle = ({amount,cartIncrease,cartDecrease}) => {
  return (
    <div className='cart-button'>

      <div className="increase"><button onClick={()=>cartDecrease()} style={{background:"white",color:"black",fontWeight:"bold",border:"none",outline:"none",fontSize:"2rem",cursor:"pointer"}}><AiOutlineMinus/></button></div>  
        <div className="amount-style" style={{color:"#343434",cursor:"pointer"}}>
            {amount}
        </div>
      <div className="increase"><button onClick={()=>cartIncrease()} style={{background:"white",color:"black",fontWeight:"bold",border:"none",outline:"none",fontSize:"2rem",cursor:"pointer"}}><AiOutlinePlus /></button></div>  
    </div>
  )
}

export default CartAmountToggle