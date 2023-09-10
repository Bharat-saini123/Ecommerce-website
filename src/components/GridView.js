import React from 'react';
import Product from '../Product';


const GridView = ({products}) => {
  return (<>
    <div className='grid-view-section top-feature'>

{
    products.map((currentElement)=>{


       
        return <Product key={currentElement.id} {...currentElement} />
     
    })
}


    </div>


    
    </>
  )
}

export default GridView