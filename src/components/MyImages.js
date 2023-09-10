import React from 'react';
import { useState } from 'react';

const MyImages = ({image=[{url:""}]}) => {
  const [mainImage,setMainImage]=useState(image[0])
  
  return (<><div className="total-images">
  <div className="my-4-img-total"> {image.map((currentValue,index)=>{

   return <div key={index}  className='four-img' ><figure className='four-img-fig'><img src={currentValue.url} alt="none" onClick={()=>setMainImage(currentValue)}/></figure></div>
    
   




   })}
</div>
   <div className="one-img"><figure className='one-img-fig'><img src={mainImage.url} alt={mainImage.filename} /></figure></div>
   </div></>  )
}

export default MyImages