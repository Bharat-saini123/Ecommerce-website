import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({name}) => {
  return (<>
  <div className="pagenavigation-container"><NavLink to={"/"} style={{color:"#3498DB",textDecoration:"none",textTransform:"capitalize"}}>Home</NavLink><span style={{textTransform:"capitalize"}}>/{name}</span></div>
   

 
   </>
  )
}

export default PageNavigation