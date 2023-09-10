import React from 'react';
import Herosection from './components/Herosection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import FeatureProduct from './components/FeatureProduct';


const Home = () => {
  const myData={
    firstName:"Saini Bhai",
    lastName:"Store",
  }
  return (<>
    <Herosection data={myData} />
    <FeatureProduct/>
    
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home