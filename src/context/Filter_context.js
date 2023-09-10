import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../components/reducers/Filterreducer"

const FilterContext=createContext();

const initial_value={
    filter_products:[],
    all_filter_products:[],
    grid_view:true,
    sorting_view:"lowest",
    filters:{
        text:"",
        category:"all",
        company:"all",
        colors:"all",
        maxPrice:0,
        price:0,
        minPrice:0,
        


    }
}
const FilterContextProvider=({children})=>{

    const {products}=useProductContext();
    const [state,dispatch]=useReducer(reducer,initial_value);


    const clearFilter=()=>{


        dispatch({type:"CLEAR_FILTER"})
     }

const setGridView=()=>{

     return dispatch({type:"SET_GRID_VIEW"})

}

const setListView=()=>{


    return dispatch({type:"SET_LIST_VIEW"})
}
 const sorting=()=>{


    return  dispatch({type:"GET_SORTING"})
 }

 const updateSearch=(event)=>{
   let name=event.target.name;
    let value=event.target.value;
   

   return dispatch({type:"UPDATE_SERACH",payload:{name,value}})
 }





    useEffect(()=>{
     
       

       
       
         dispatch({type:"my_dec_sort",payload:products})
         

    },[products,state.sorting_view])


    useEffect(()=>{
        dispatch({type:"FILTER_UPDATE_PRODUCT"})


    },[products,state.filters])


    




    useEffect(()=>{

dispatch({type:"filter_load",payload:products})

    },[products])











    return <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateSearch,clearFilter}}>


        {children}
    </FilterContext.Provider>




}
const useFilterContext=()=>{
    return useContext(FilterContext)
}
export {FilterContext,FilterContextProvider,useFilterContext}