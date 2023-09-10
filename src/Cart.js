import React from 'react'
import { useCartContext } from './context/Cart_Context';
import CartItems from './components/CartItems';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const {cart,clearCartAll}=useCartContext();
  // console.log(cart)


  if(cart.length===0){return <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"5rem",height:"30vh", textTransform:"capitalize"}}>No cart item</p>

  }
  return (<>
        <div className="cart-main-products container">
         <div className="cart-total-products-heading ">
          <div className="cart-total-item total-products">item</div>
          <div className="cart-total-price cart-hide total-products">price</div>
          <div className="cart-total-quantity total-products">Quantiy</div>
          
          <div className="cart-total-subtotal cart-hide total-products">subtotal</div>
          <div className="cart-total-remove total-products">remove</div>
          
         </div>
         <hr />



         <div className="cart-items-products">


          {
          cart.map((currentElement)=>{

  return <CartItems key={currentElement.id} {...currentElement}/>



})


          }<hr/>
         </div>
         <div className="cart-two-buttons" style={{display:"grid",gridTemplateColumns:"1fr 0.28fr",marginTop:"1rem"}}>

<div className="cart-first-button"><NavLink to={"/products"} style={{textDecoration:"none"}}><button type='button' className='btn-1'>Continue Shopping</button></NavLink></div>
<div className="cart-second-button"><button className='btn-2' onClick={clearCartAll}>Clear</button></div>


</div>
  </div>
 
 
  </>
  )
}

export default Cart