import React from 'react';
import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai"

const Star = ({star,reviews}) => {

const ratingStar=Array.from({length:5},(element,index)=>{

let number=index+0.5;
return(
    <span>
{star>=index+1?<FaStar/>
    :star>=number?<FaStarHalfAlt/>:<AiOutlineStar/>}
    </span>
)

})
  return (<><span className='rating' style={{color:"yellow"}}>{ratingStar}  </span><span>({reviews}:Customer reviews)</span>
  
  

    
    
    </>
  )
}

export default Star