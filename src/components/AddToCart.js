import React from 'react';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/Cart_Context';


const AddToCart = ({product}) => {
  const {addToCart}=useCartContext();
     const [amount,setAmount]=useState(1);
    const {id,colors,stock}=product;
    const [initialcolor,setInitialColor]=useState(colors[0]);
  

    const cartDecrease=()=>{
      amount>1?setAmount(amount-1):setAmount(1)
      
          }
    const cartIncrease=()=>{
      amount<stock?setAmount(amount+1):setAmount(stock)


    } 
 


  return (<><div className="colors">
    <p style={{fontSize:"1.1rem",cursor:"pointer"}}>Colors:

  {
    colors.map((iniColor,index)=>{
     
        return<>
         {/* <button  key={index} className={iniColor===initialcolor?"btn-dot-color active":"btn-dot-color"} style={{background:iniColor}} > {iniColor===initialcolor?<FaCheck style={{color:"white"}}/>:null}</button> */}
        
        <button  key={index} className={iniColor===initialcolor?"btn-dot-color active":"btn-dot-color"} style={{background:iniColor}} onClick={()=>setInitialColor(iniColor)} > {iniColor===initialcolor?<FaCheck style={{color:"white"}}/>:null}</button>
        </>

            

        

    })
  }
  </p>
  </div> 
  



  {/* add to cart */}


<CartAmountToggle amount={amount} cartIncrease={cartIncrease} cartDecrease={cartDecrease}/>
<NavLink to={"/cart"} style={{textDecoration:"none"}} onClick={()=>addToCart(id,initialcolor,amount,product)}><button className='btn-primary'>Add to Cart</button></NavLink>


  </>
    
  )
}

export default AddToCart