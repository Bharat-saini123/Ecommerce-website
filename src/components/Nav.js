import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { CgMenu,CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuicon,setMenuicon]=useState();


  return (
    <div className={menuicon?"main-navbar active":"main-navbar"}>
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className={"navbar-link"} onClick={()=>setMenuicon(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={"navbar-link"} onClick={()=>setMenuicon(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={"navbar-link"} onClick={()=>setMenuicon(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={"navbar-link"} onClick={()=>setMenuicon(false)}>
            products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={"navbar-link cart-troly-link"}>
            <GiShoppingCart className="cart-troly" />
            <span className="cart-troly-item">10</span>
          </NavLink>
        </li>
      </ul>
      <div className="mobile-navbar-btn">
        <CgMenu name="menu-outline" className="mobile-nav-icon menu-outline" onClick={()=>setMenuicon(true)}/>
        <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={()=>setMenuicon(false)}/>
       
      </div>
    </div>
  );
};

export default Nav;
