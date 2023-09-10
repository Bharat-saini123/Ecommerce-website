import React from 'react';
import { useFilterContext } from '../context/Filter_context';
import GridView from './GridView';
import Listview from './Listview';


const Product_List = () => {
   const {filter_products,grid_view}=useFilterContext();
  
  
   if(grid_view===true){
    return <GridView products={filter_products}/>
   }
   if(grid_view===false){

      return <Listview products={filter_products}/>
   }
   
   
   
  
}

export default Product_List