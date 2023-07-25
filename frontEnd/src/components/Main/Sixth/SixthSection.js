import React, { Component } from 'react';
import SectionPropsTwo from '../../props/SectionPropsTwo';
import arcade from '../../../CommonResources/images/icons/arcade.png'
import './sixth.css'

class SixthSection extends Component {
    render() {
        return (
            <div>
                <SectionPropsTwo 
                className="sixth-heghlight-wrapper" 
                logoTv={arcade} 
                discription="Agent 8 is a small hero on a big mission." 
                discriptionRight="Pay for your next iPhone over time, interest-free with Apple Card."  
                linkName="Play now" 
                linkName2="Learn about Apple Arcade" 
                linkNameRight="Learn more" 
                linkName2Right="Apply now" 
                productTitleRight="Apple Card Monthly Installments" 
                displayTitleLeft="none"
                displayPriceLeft="none"
                displayTvShowLogoWraper="none"
                displayWatchMoreWraper="none"
                displayTopLogoWraperRight="none"
                
                />
            </div>
        );
    }
}

export default SixthSection;
