import React from 'react';
import {NavLink} from "react-router-dom";
import Nav from './Nav';

const Header = () => {
  return (<>
  <div className='main-header'>
   < NavLink to={"/"}>

    <div className="header-img"><img src='./images/saini.jpg.jpg'></img></div>
   </NavLink>
   <Nav/>
   </div>
   </>
  )
}

export default Header