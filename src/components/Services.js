import React from 'react';
import { FcBriefcase,FcSpeaker,FcStart,FcPicture } from "react-icons/fc";

const Services = () => {
  return (
    <div className="mainservices">
     
     <div className="box-service">

<div className="box1-service child-service"><FcBriefcase className='service-icon'/><h3>super fast free delevery</h3></div>
<div className="box2-service child-service"><div className="box2-service-1 "><FcSpeaker className='service-icon'/><h3>non contact shipping</h3></div><div className="box2-service-1 "><FcStart className='service-icon'/><h3>Money-Back-Garuanted</h3></div></div>
<div className="box3-service child-service"><FcPicture className='service-icon'/><h3>super secure payment system</h3></div>


     </div>


    </div>
  )
}

export default Services