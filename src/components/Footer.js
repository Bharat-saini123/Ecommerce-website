import React from 'react';

import { CiInstagram,CiFacebook,CiYoutube} from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (<>

  <div className="footer-content">

    <div className="child-content child-content-1">
        <p>Ready to get staeted</p>
        <h3>Talks to get ready</h3>

    </div>
    <div className="child-content child-content-2">
      <NavLink to="/cart" style={{textDecoration:"none"}}><button className='btn-1'>Get Started</button></NavLink>  
        
    </div>
  </div>
    <div className='main-footer'>
<div className="footer-boxes-1 footer-boxes">


    <div className="box box1"><h3>Saini Store</h3><p style={{fontSize:"1.1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos alias animi quia eaque repellat.
        </p></div>
    <div className="box box2"><h3>subscribe to get important update</h3>
    
    <div className="input-footer">
        <input type="email" name='email' placeholder='Email' style={{cursor:'pointer',outline:"none"}} />
      <NavLink to="https://www.youtube.com/channel/UCdeJM25c__6pyt7eLEuSZGg" style={{textDecoration:"none"}}><button className='btn-1'>subscribe</button></NavLink>  
    </div>
    </div>
    <div className="box box3"> <h3>Follow Us</h3>
    <div className="footer-icon-main">
     <NavLink to="https://www.facebook.com/profile.php?id=100017389907925" style={{color:"white"}}><CiFacebook className='footer-icon'/></NavLink>   
      <NavLink to="https://www.instagram.com/bharat_saini2828/" style={{color:"white"}}><CiInstagram className='footer-icon'/></NavLink>  
       <NavLink to="https://www.youtube.com/" style={{color:"white"}}><CiYoutube className='footer-icon'/></NavLink> 
    </div>
    </div>
    <div className="box box4"> <h3>Call us</h3><p><NavLink to="tel:99912345670" style={{textDecoration:"none", color:"white"}}>99912345670</NavLink></p></div>
</div>
<div className="footer-boxes-2 footer-boxes">
<div className="box box1"><h3>@{new Date().getFullYear()} saini,all rights researved</h3></div>
    <div className="box box2"><h3>privacy policy</h3><h3>Term & condition</h3></div>


</div>



    </div></>
  )
}

export default Footer