import React from 'react';
import FeatureBox from './FeatureBox';
import featureImage from '../images/feature_1.png'
import featureImage2 from '../images/feature_2.png'
import featureImage3 from '../images/feature_3.png'

function FeatureComp() {
  return(
      <div className=''>
          <div className='a-container'>
              <FeatureBox image={featureImage} title="Development Course" />
              <FeatureBox image={featureImage2} title="Money Saving Services" />
              <FeatureBox image={featureImage3} title="Usability Interface" />
          </div>
      </div>
  ) 
}

export default FeatureComp;
