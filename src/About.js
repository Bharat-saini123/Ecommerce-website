import React from 'react'
import Herosection from './components/Herosection';


const About = () => {
  
  
  const myData={
    firstName:"sharma G",
    lastName:"store"
  }
  return (<>
    <Herosection data={myData}/>
    </>
  )
}

export default About