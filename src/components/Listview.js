import React from 'react';
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from 'react-router-dom';


const Listview = ({products}) => {
  return (<>
    <div className='list-view-main'>

{

  products.map((currentProduct)=>{
     const {id,name,price,description,image,company }=currentProduct;

     return <div className="mylist-view" key={id}>

      <div className="image-list-view">

        <figure className='list-view-fig'>
          <img src={image} alt="" />
        </figure>
      </div>

<div className="other-list-view">
<p style={{fontSize:"3rem",marginBottom:"1rem",textTransform:"capitalize"}}>{name}</p>
<p style={{fontSize:"1.5rem",marginBottom:"1rem",textTransform:"capitalize",color:"#343434"}}><FormatPrice price={price}/></p>
<p style={{fontSize:"1.3rem",marginBottom:"1rem",textTransform:"capitalize",color:"#343434"}}>{description.slice(0,176)}...</p>
<NavLink to={`/singleproduct/${id}`} style={{marginTop:"7rem",textDecoration:"none",display:"block"}}><button className='btn-primary'>Learn More</button></NavLink>
</div>


     </div>

  })
}


    </div></>
  )
}

export default Listview