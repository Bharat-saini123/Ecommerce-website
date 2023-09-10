import React from "react";

import { useEffect } from "react";
import { useProductContext } from "./context/ProductContext";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import PageNavigation from "./components/PageNavigation";
import FormatPrice from "./Helpers/FormatPrice";
import { ImTruck } from "react-icons/im";
import { IoGitCompare } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import MyImages from "./components/MyImages";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { isSingleLoading, singleFeatureProduct, getSingleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alais,
    name,
    company,
    price,
    reviews,
    stars,
    stock,
    description,
    image,
  } = singleFeatureProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
 
  if (isSingleLoading) {
    return <h1 style={{margin:"auto",textAlign:"center"}}><ClipLoader/></h1>;
  }

  return (
    <>
      <h1>
        <PageNavigation name={name} />
      </h1>

      <div className="page-container">
        <div className="pagenavigation-photos page-child">
          <MyImages image={image} />
        </div>

        <div className="pagenavigation-product page-child">
          <h1
            className="pagenavigation-name"
            style={{ textTransform: "capitalize", fontSize: "3rem" }}
          >
            {name}
          </h1>
          <p style={{ fontSize: "1.1rem", textTransform: "capitalize" }}>
            <Star star={stars} reviews={reviews} />
          </p>

          <span>
            MRP:{" "}
            <del style={{ fontSize: "1.1rem", textTransform: "capitalize" }}>
              <FormatPrice price={price + 28000} />
            </del>
          </span>
          <p
            style={{
              color: "#3498DB",
              textTransform: "capitalize",
              fontSize: "1.1rem",
            }}
          >
            day of the deal: <FormatPrice price={price} />
          </p>
          <p style={{ color: "gray", fontWeight: "300", fontSize: "1.1rem" }}>
            {description}
          </p>
          <div
            className="pagenavigation-icon"
            style={{ fontWeight: "300", fontSize: "1.1rem" }}
          >
            <div className="page-icon-1">
              <p className="page-icon">
                <ImTruck style={{ height: "30px", width: "30px" }} />
              </p>
              <p style={{ color: "gray" }}> Free deveviry</p>
            </div>
            <div className="page-icon-2">
              <p className="page-icon">
                <IoGitCompare
                  style={{ height: "30px", width: "30px", textAlign: "center" }}
                />
              </p>
              <p style={{ color: "gray" }}> 30 Days replacement</p>
            </div>
            <div className="page-icon-3">
              <p className="page-icon">
                <ImTruck style={{ height: "30px", width: "30px" }} />
              </p>
              <p style={{ color: "gray" }}> Saini Delevered</p>
            </div>
            <div className="page-icon-4">
              <p className="page-icon">
                <AiOutlineSafety style={{ height: "30px", width: "30px" }} />
              </p>
              <p style={{ color: "gray" }}> 2 days warranty</p>
            </div>
          </div>
          <hr />

          <div className="stock">
            <p>
              {" "}
              Avilable:{" "}
              <span style={{ fontSize: "1.1rem", textTransform: "capitalize" }}>
                {stock > 0 ? "in stock" : "out of stock"}
              </span>
            </p>
          </div>
          <div>
            {" "}
            Brand:{" "}
            <span
              style={{
                fontSize: "1.1rem",
                textTransform: "capitalize",
                color: "#3498DB",
              }}
            >
              {company}
            </span>
          </div><hr style={{border: "0.1rem solid black",width:"90%",marginTop:"1rem"}}/>
          {stock>0 && <AddToCart product={singleFeatureProduct}/>}
        </div>
        
      </div>
    </>
  );
};

export default Singleproduct;
