import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from './Helpers/FormatPrice';

const Product = (curproduct) => {
  const {id}=curproduct
  return (
    <NavLink to={`/singleproduct/${id}`} style={{textDecoration:"none",color:"black",fontSize:"1.2rem"}}>
              <div className="main-feature-product">
                <div className="feature-product-image">
                  <figure>
                    <div className="image-feature">
                      <img src={curproduct.image} alt="none" />
                    </div>
                    <div className="feature-product-name">{curproduct.name}</div>
                  </figure>
{/* {console.log(curproduct)} */}
                  <div className="cat-Price">
                    <div className="catagory">{curproduct.category}</div>

                    <div className="feature-product-price">
                    <FormatPrice price={curproduct.price}/>  
                    </div>
                  </div>
                </div>
              </div>
              </NavLink>
  )
}

export default Product