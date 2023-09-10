import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from "../components/reducers/productreducer";


const AppContext=React.createContext();

const initialState={

    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleFeatureProduct:{}
}

const API="https://api.pujakaitem.com/api/products";
const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    const productFunc=async(url)=>{
        dispatch({type:"SET_LOADING"})
        try{
        const response=await axios.get(url);
        // console.log(response)
        const productData=await response.data;
        // console.log(productData)
        dispatch({type:"MY_API_DATA",payload:productData})
                }catch(error){
                dispatch({type:"API ERROR"})
                          
                }


        


    }



    //second Api call
    const getSingleProduct=async(url)=>{
        dispatch({type:"is_Single_Loading"})
        try{
            const response=await axios.get(url);
            // console.log(response)
            const singleproductData=await response.data;
            dispatch({type:"MY_single_API_DATA",payload: singleproductData})


        }catch(error){
            dispatch({type:"Single_API_ERROR"})
                      
            }


    }

    useEffect(()=>{

      productFunc(API)

    },[])


// {...state} mean intitail state ki value get kr skta hu

    return <AppContext.Provider value={{...state,getSingleProduct}}>

        {children}
    </AppContext.Provider>

}


const useProductContext=()=>{


    return useContext(AppContext);
}
export{AppContext,AppProvider,useProductContext}