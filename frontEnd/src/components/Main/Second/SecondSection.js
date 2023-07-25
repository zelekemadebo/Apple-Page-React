import React, { Component } from 'react';
import SectionPropsOne from '../../../components/props/SectionPropsOne';
import './second.css'

class SecondSection extends Component {
    render() {
        return (
            <div>
              <SectionPropsOne 
              className="second-hightlight-wrapper" 
              newAlert= "New" 
              productTitle="MacBook Air" 
              discription="Twice the speed. Twice the storage." 
              price="From $999." 
              linkUrl="#" 
              linkName="Learn More" 
              linkName2="Buy" 
              color="black" /> 
            </div>
        );
    }
}

export default SecondSection;
