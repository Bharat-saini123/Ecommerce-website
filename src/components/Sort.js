import React from 'react';
import {RiLayoutGridLine} from 'react-icons/ri';
import {BsList} from "react-icons/bs";
import { useFilterContext } from '../context/Filter_context';


const Sort = () => {
  const {grid_view,setGridView,setListView,filter_products,sorting}=useFilterContext();
  return (<div className="main-sort">
<div className="icons-sort">
<button className={grid_view===true?"my-active":""} style={{marginRight:"1rem",cursor:"pointer",border:"none",padding:"0.5rem"}} onClick={()=>setGridView()}><RiLayoutGridLine style={{height:"20px",width:"20px"}}/></button > <button className={grid_view===false?"my-active":""} style={{cursor:"pointer",border:"none",padding:"0.5rem"}} onClick={setListView} ><BsList style={{height:"20px",width:"20px"}}/></button>

</div>
<div className="value-sort" style={{fontSize:"1.5rem"}}>
{`${filter_products.length}`} Product Avilable
</div>
<div className="sort-method"  style={{cursor:"pointer"}}>
             
             <form action="#">

  <label htmlFor="sort"></label>
  <select name="sort" id="sort" onClick={()=>sorting()} style={{cursor:"pointer",outline:"none",fontSize:"1.5rem"}}>

  <option style={{cursor:"pointer"}} value="lowest" >Price(lowest)</option>
  <option value="#" disabled></option>
  <option style={{cursor:"pointer"}} value="higest" >Price(higest)</option>
  <option value="#" disabled></option>
  <option style={{cursor:"pointer"}} value="a-z" >Price(a-z)</option>
  <option value="#" disabled></option>
  <option style={{cursor:"pointer"}} value="z-a" >Price(z-a)</option>


  </select>

             </form>
</div>

  </div>
   
  )
}

export default Sort