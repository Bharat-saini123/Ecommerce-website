// import React from "react";
// import { useProductContext } from "../context/ProductContext";
// import { NavLink } from "react-router-dom";
// import { ClipLoader } from "react-spinners";

// const FeatureProduct = () => {
//   const { isLoading, featureProducts } = useProductContext();

//   if (isLoading) {
//     return <div className="loading" style={{textAlign:"center",fontSize:"2rem"}}><ClipLoader/></div>;
//   }
//   console.log(featureProducts);

//   return (
//     <>
    
//       <div className="contaier-feature">
//         <h1>Our features services</h1>
//         <div className="top-feature">
//           {featureProducts.map((curproduct, index) => {
//             return (<NavLink to={`/singleproduct/${curproduct.id}`} style={{textDecoration:"none",color:"black"}}>
//               <div className="main-feature-product" key={index}>
//                 <div className="feature-product-image">
//                   <figure>
//                     <div className="image-feature">
//                       <img src={curproduct.image} alt="none" />
//                     </div>
//                     <div className="feature-product-name">{curproduct.name}</div>
//                   </figure>

//                   <div className="cat-Price">
//                     <div className="catagory">{curproduct.category}</div>

//                     <div className="feature-product-price">
//                       {curproduct.price}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               </NavLink> );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeatureProduct;












import React from "react";
import { useProductContext } from "../context/ProductContext";

import { ClipLoader } from "react-spinners";
import Product from "../Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <h1 className="loading" ><ClipLoader style={{textAlign:"center",fontSize:"2rem"}}/></h1>;
  }
  // console.log(featureProducts);

  return (
    <>
    
      <div className="contaier-feature">
        <h1>Our features services</h1>
        <div className="top-feature">
          {featureProducts.map((curproduct, index) => {
            return (<Product key={curproduct.id} {...curproduct}/> );
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;