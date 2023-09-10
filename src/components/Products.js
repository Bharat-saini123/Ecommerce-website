import React from "react";
import FilterSection from "./FilterSection";
import Product_List from "./Product_List";
import Sort from "./Sort";
import { useFilterContext } from "../context/Filter_context";

const Products = () => {
  // const {filter_products, all_filter_products}=useFilterContext();
  // console.log(filter_products)
  // console.log(all_filter_products)
  return (
    <>
      <div className="main-products">
        <div className="filter-section">
          <FilterSection />
        </div>

        <div className="productlist-sort">
          <div className="sort-list">
            <Sort />
          </div>
          <div className="product-list-main">
            <div className="product-list">
              <Product_List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
