const Filterreducer = (state, action) => {
  switch (action.type) {
    case "filter_load":

    let maxPrice=action.payload.map((currentElement)=>{
      return currentElement.price

    })
  
//  priceTotal=Math.max(...priceTotal)
//    console.log(priceTotal)

maxPrice=maxPrice.reduce((accum,current)=>{
  return Math.max(accum,current)

},0)
// console.log(maxPrice)
// priceTotal=Math.max.apply(Infinity,priceTotal)
// console.log(priceTotal)

    // priceTotal=  priceTotal.sort((a,b)=>{
    //   return b-a

    // })
    // console.log(priceTotal[0])
    // console.log(priceTotal)
      return {
        ...state,
        filter_products: [...action.payload],
        all_filter_products: [...action.payload],
        filters:{...state.filters,
          maxPrice:maxPrice,price:maxPrice,
        }

      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORTING":
      let myid = document.querySelector("#sort");
     let myidvalue = myid.options[myid.selectedIndex].value;
      

      return {
        ...state,
        sorting_view: myidvalue,
      };

    case "my_dec_sort":
      let newSortData;
     let cloneProduct = [...action.payload];
      if (state.sorting_view === "a-z") {
        newSortData = cloneProduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if(state.sorting_view === "z-a"){
        newSortData=cloneProduct.sort((a,b)=>{

            return b.name.localeCompare(a.name);

        })
      }

      if(state.sorting_view === "lowest"){
        newSortData=cloneProduct.sort((a,b)=>{
            return a.price-b.price;



        })
      }
      if(state.sorting_view === "higest"){
        newSortData=cloneProduct.sort((a,b)=>{
            return b.price-a.price;



        })
      }



      return {
        ...state,
        filter_products: newSortData,
      };


      case "UPDATE_SERACH":
        let {name,value}=action.payload;
        return{
             ...state,
             filters:{
              ...state.filters,
              [name]:value,
             }
        }
   case "FILTER_UPDATE_PRODUCT":
    let  {all_filter_products}=state;
    
    let clone_All_Filter_product=[...all_filter_products];

    const {text,category,company,colors,price}=state.filters;
    
   if(text){
     clone_All_Filter_product=clone_All_Filter_product.filter((currentElement)=>{

        return currentElement.name.toLowerCase().includes(text);

      })
    }
   
    if(category!=="all"){
      clone_All_Filter_product=clone_All_Filter_product.filter((currentElement)=>{
        return currentElement.category.toLowerCase()===category.toLowerCase();

      })
    }
    if(company!=="all"){
      clone_All_Filter_product=clone_All_Filter_product.filter((currentElement)=>{
        return currentElement.company.toLowerCase()===company.toLowerCase();

      })
    }
    if(colors!=="all"){
      clone_All_Filter_product=clone_All_Filter_product.filter((currentElement)=>{
        return currentElement.colors.includes(colors)
      })

    }
    if(price){
      clone_All_Filter_product=clone_All_Filter_product.filter((currentElement)=>{


        return currentElement.price<=price
      })
    }
   
   
   
    
    
    return {
      ...state,
      filter_products:clone_All_Filter_product,
    };


    case "CLEAR_FILTER":
      return{
        ...state,
       filters:{
        text:"",
        category:"all",
        company:"all",
        colors:"all",
        maxPrice:state.filters.maxPrice,
        price:0,
        minPrice:state.filters.minPrice
       }
      }

        

    default:
      return state;
  }
};

export default Filterreducer;
