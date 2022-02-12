import React from 'react';

function FeatureBox(props) {
  return(
      <div className='a-box'>
          <div className='a-b-img'>
              <img src={props.image} />
          </div>
          <div className='a-b-text'>
              <h2>{props.title}</h2>
              <p>Lorem ipsum dsfhjb sdfhjbsd sdjhbsdj sdjhj sdbds kjds</p>
          </div>
      </div>
  ) 
}

export default FeatureBox;
