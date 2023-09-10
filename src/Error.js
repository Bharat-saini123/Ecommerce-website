import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="main-error">
      <h1>404</h1>
      <h2>oh! you are lost</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nulla architecto iure quibusdam corporis omnis fugiat provident deserunt in recusandae!

      </p>
      <p className="error-link"><NavLink to="/"><button className='btn-primary'>Home</button></NavLink></p>
        
      
    </div>
  )
}

export default Error