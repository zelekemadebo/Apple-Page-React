import React, { Component } from 'react';
import SectionPropsTwo from '../../../components/props/SectionPropsTwo';
import logoTv from '../../../CommonResources/images/icons/apple-tv-logo.png'
import series from '../../../CommonResources/images/icons/watch-series5-logo.png'
import tvShow from '../../../CommonResources/images/home/banker.png'
import './fifth.css'


class FifthSection extends Component {
    render() {
        return (
            <div>
            <SectionPropsTwo 
            className="fifth-heghlight-wrapper" 
            logoTv={logoTv} 
            logoSeries={series} 
            logoTvShow={tvShow} 
            discriptionRight="With the Always-On Retina display" 
            discriptionRightBottom="You’ve never seen a watch like this." 
            linkNameLeft ="Watch now on the Apple TV App" 
            linkNameRight="Learn More" 
            linkName2Right="Buy"
            displayTDPLeft="none" /> 
            </div>
        );
    }
}

export default FifthSection;
