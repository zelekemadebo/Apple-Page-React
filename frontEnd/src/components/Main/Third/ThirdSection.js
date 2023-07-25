import React, { Component } from 'react';
import SectionPropsOne from '../../../components/props/SectionPropsOne';
import '../../../CommonResources/css/styles.css'
import './third.css'

class ThirdSection extends Component {
    render() {
        return (
            <div>
                <SectionPropsOne 
                className="third-hightlight-wrapper" 
                productTitle="iPhone 11 Pro" 
                discription="Pro cameras. Pro display. Pro performance." 
                price="From $24.95/mo. or $599 with trade‑in." 
                linkUrl="#" 
                linkName="Learn More" 
                linkName2="Buy" 
                color="white" /> 
            </div>
        );
    }
}

export default ThirdSection;
