import React, { Component } from 'react';
import SectionPropsOne from '../../../components/props/SectionPropsOne';
import './first.css'

class FirstSection extends Component {
    render() {
        return (
            <SectionPropsOne 
            className="first-hightlight-wrapper" 
            newAlert= "New" 
            productTitle="iPad Pro" 
            linkUrl="#" 
            linkName="Learn More" 
            linkName2="Order" 
            ipodCaptionOne="iPad Pro available starting 3.25" 
            ipodCaptionTwo="Magic Keyboard coming in May" 
            color="black" />
        );
    }
}

export default FirstSection;
