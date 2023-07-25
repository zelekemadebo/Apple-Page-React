import React, { Component } from 'react';
import SectionPropsTwo from '../../../components/props/SectionPropsTwo';
import './fourth.css'

class FourthSection extends Component {
    render() {
        return (
            <div>
            <SectionPropsTwo 
            className="fourth-heghlight-wrapper" 
            productTitle="iPhone 11" 
            productTitleRight="Get the latest CDC response to COVID-19."
            discription="Just the right amount of everything" 
            price="From $18.70/mo. or $499 with trade‑in." 
            linkUrl="#" linkName="Learn More" 
            linkNameRight="Watch the PSA"
            linkName2="Apply Now" 
            displayTopLogoWraperLeft="none" 
            displayTvShowLogoWraper="none"
            displayWatchMoreWraper="none"
            displayTopLogoWraperRight="none"
            displayDiscriptionWraperRight="none"
            displayLink2Right="none"  /> 
            </div>
            
        );
    }
}

export default FourthSection;
