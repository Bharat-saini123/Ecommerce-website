import React from 'react';
import { FcAddImage,FcAnswers,FcBarChart,FcBusinessContact,FcCellPhone } from "react-icons/fc";

const Trusted = () => {
  return (<>
<div className="real-main-trust">
<h3>trusted by 1000+ companies</h3>
<div className='main-trusted'>
        <div className="item icon-1"><FcAddImage className='trust-icon'/></div>
        <div className="item icon-2"><FcAnswers className='trust-icon'/></div>
        <div className="item icon-3"><FcBarChart className='trust-icon'/></div>
        <div className="item icon-4"><FcBusinessContact className='trust-icon'/></div>
        <div className="item icon-5"><FcCellPhone className='trust-icon'/></div>
    </div>
</div>
 
    </>
  )
}

export default Trusted