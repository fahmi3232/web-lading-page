import React from 'react';
import NavbarComp from './NavbarComp';

function HeaderComp() {
  return(

      <div id="main">
          <NavbarComp />
          <div className='name'>
              <h1><span>Launch Your App</span> With Confidence And Creativity</h1>
               <p className='details'>Lorem ipsum asfdjh jhasdbuef asdbkjabsd kjasd kjasd msdjbd kjdb </p> 
               <a href='#' className='cv-btn'>Download</a>
          </div>
      </div>
  ) 
}

export default HeaderComp;
