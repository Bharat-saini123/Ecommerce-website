import React from "react";
import {NavLink} from "react-router-dom"

const Herosection = (props) => {
  
  return (
    <>
      <div className="container main-hero">
        <div className="hero-section-data">
          <p>welcome to</p>
          <h1>{props.data.firstName} {props.data.lastName}</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est iure suscipit deserunt voluptatum pariatur culpa, odit veniam numquam animi modi fugit ea veritatis possimus ipsa itaque delectus unde vel necessitatibus! Neque laboriosam sapiente in!</p>
          <div className="btn"><NavLink to={"/products/"} style={{textDecoration:"none"}}><button className="btn-primary">shop now</button></NavLink></div>
        </div>
        <div>
          <figure className="hero-image-figure">
            <img src="./images/hero.jpg" alt=""></img>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Herosection;
