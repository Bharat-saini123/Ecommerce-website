import React from "react";
import { useFilterContext } from "../context/Filter_context";
import { FaCheck } from 'react-icons/fa';
import FormatPrice from  "../Helpers/FormatPrice"


const FilterSection = () => {
  const {
    filters: { text,colors,price,maxPrice,minPrice },
    updateSearch,
    all_filter_products,
    clearFilter,
    
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((currentElement) => {
      return currentElement[property];
    });

    if (property === "colors") {
      newValue = newValue.flat();
    }

    const newData = ["all", ...new Set(newValue)];
    return newData;
  };

  const catagoryOnlyData = getUniqueData(all_filter_products, "category");
  const companyOnlyData = getUniqueData(all_filter_products, "company");
  const colorsOnlyData = getUniqueData(all_filter_products, "colors");
  const priceOnlyData = getUniqueData(all_filter_products, "price");
  // console.log(priceOnlyData)
  // console.log(colorsOnlyData)
  // console.log(getUniqueData(all_filter_products,"category"))

  // console.log(getUniqueData(all_filter_products,"company"))

  return (
    <>
      <div className="seacrh-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            onChange={updateSearch}
            value={text}
            name="text"
            style={{
              padding: "0.2rem 0.8rem",
              cursor: "pointer",
              outline: "none",
            }}
            placeholder="Search"
          />
        </form>
      </div>

      <div className="main-filter-section-catagory">
        <h2 style={{ marginTop: "2rem",fontFamily:"sans-serif" }}>Catagory</h2>
        <div className="filter-section-catagory">
          {catagoryOnlyData.map((currentElement, index) => {
            return (
              <button
                className="catagory-btn"
                key={index}
                type="button"
                name="category"
                onClick={updateSearch}
                value={currentElement}
              >
                {currentElement}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-section-company">
        <h2 style={{ margin: "2rem 0rem",fontFamily:"sans-serif" }}>Company</h2>
        <div className="section-company">
          <select
            name="company"
            id="company"
            onClick={updateSearch}
            style={{
              outline: "none",
              color: "#3498DB",
              fontSize: "1.5rem",
              textTransform: "capitalize",
              padding:"0.4rem",
              outlineStyle:"revert",
              cursor:"pointer"
              
            }}
          >
            {companyOnlyData.map((currentElement, index) => {
              return (
                <option
                  key={index}
                  value={currentElement}
                  name="company"
                  style={{
                    display: "block",
                    outline: "none",
                    marginTop: "1rem",
                    border: "none",
                    textTransform: "capitalize",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                   
                    background: "none",
                    color: "#3498DB",
                    
                    
                  }}
                >
                  {currentElement}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="colors-filter-sections">
      <h2 style={{ marginTop: "2rem",fontFamily:"sans-serif" }}>Colors</h2>
      <div className="sections-colors">
{
  colorsOnlyData.map((currentColor,index)=>{
    if(currentColor==="all"){
    return ( <button key={index} value={currentColor} className="btn-dot-color active" style={{backgroundColor:"white",fontSize:"1.8rem",marginRight:"1rem"}} type="button" name="colors" id="colors" onClick={updateSearch}>{colors===currentColor?"":null}All</button>
    )
    }

    return( <button key={index} value={currentColor} className={colors===currentColor?" btn-dot-color active":"btn-dot-color"} style={{backgroundColor:currentColor,marginTop:"1rem"}} type="button" name="colors" id="colors" onClick={updateSearch}>{colors===currentColor?<FaCheck style={{color:"white"}}/>:null}</button>
    )

  })
}


      </div>

      </div>
      <div className="filter-price">

        <h2 style={{ marginTop: "2rem",fontFamily:"sans-serif" }}>Price</h2>

        <p className="max-price" style={{marginTop:"1rem" ,fontSize:"1.1rem"}}><FormatPrice price={price}/></p>


        <div className="range-price" style={{marginTop:"0.5rem"}}>

          <input type="range" min={minPrice} max={maxPrice} onChange={updateSearch} value={price} name="price" style={{cursor:"pointer"}}/>
        </div>
      </div>

      <div className="clear-filter">

        <button className="btn-primary" type="button" onClick={clearFilter} style={{marginTop:"1rem"}} >Clear</button>
      </div>

     
    </>
  );
};

export default FilterSection;
