import React from "react";

const productreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
      case "MY_API_DATA":
        const featureMyData=action.payload.filter((currentElement)=>{

         return currentElement.featured===true;


        })
        return {
            ...state,
            isLoading:false,
            products:action.payload,
            featureProducts:featureMyData,
        }


    case "API ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case "is_Single_Loading":
        return {
          ...state,
          isSingleLoading: true,
        };
     case "MY_single_API_DATA":
     return{
      ...state,
      isSingleLoading: false,
      singleFeatureProduct:action.payload


     };
     case "Single_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };




      default :
      return {...state};
  }
 
};
export default productreducer;
