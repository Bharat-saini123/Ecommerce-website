import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

import Singleproduct from './Singleproduct';
import Cart from './Cart';
import Error from './Error';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

const App = () => {
  return (

    <BrowserRouter>
    <Header/>
    <Routes>

<Route path="/" element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/singleproduct/:id' element={<Singleproduct/>}/ >
  <Route path='/cart' element={<Cart/>}/>
  <Route path='*' element={<Error/>}/>



    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App