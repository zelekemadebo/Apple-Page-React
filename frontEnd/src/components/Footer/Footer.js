import React, { Component } from 'react';
import FooterProps from '../props/FooterProps';
import flag from '../../CommonResources/images/icons/16.png'

import './footer.css'
import './Toggle.js'


class Footer extends Component {
    render() {
        return (
        <footer className="footer-wrapper">
        <div className="container"> 
          <div className="upper-text-container">
            <p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank" rel="noreferrer"> Customer Agreement</a>. Additional iPhone Payments terms are <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"> here</a>.</p>
            <p>2. Subscription required.<br /><br />
            Magic Keyboard sold separately.<br /><br />
            Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="https://www.apple.com/promo/">terms </a> apply.</p>
          </div>
          <div className="footer-links-wrapper row"> 
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <ul>
            
                <FooterProps linkUrl = "#" linkName= "Mac"/>
                <FooterProps linkUrl = "#" linkName= "ipad"/>
                <FooterProps linkUrl = "#" linkName= "iphone"/>
                <FooterProps linkUrl = "#" linkName= "Watch"/>
                <FooterProps linkUrl = "#" linkName= "TV"/>
                <FooterProps linkUrl = "#" linkName= "Music"/>
                <FooterProps linkUrl = "#" linkName= "AirPods"/>
                <FooterProps linkUrl = "#" linkName= "HomePod"/>
                <FooterProps linkUrl = "#" linkName= "iPod touch"/>
                <FooterProps linkUrl = "#" linkName= "Accessories"/>
                <FooterProps linkUrl = "#" linkName= "Gift Cards"/>
              </ul>
            </div> 
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3>Services</h3>
              <ul>
                <FooterProps linkUrl = "#" linkName= "Apple Music"/>
                <FooterProps linkUrl = "#" linkName= "Apple News+"/>
                <FooterProps linkUrl = "#" linkName= "Apple TV+"/>
                <FooterProps linkUrl = "#" linkName= "Apple Arcade"/>
                <FooterProps linkUrl = "#" linkName= "Apple Card"/>
                <FooterProps linkUrl = "#" linkName= "iCloud"/> 
              </ul>
              <h3>Account</h3>
              <ul>
                <FooterProps linkUrl = "#" linkName= "Manage Your Apple ID"/>
                <FooterProps linkUrl = "#" linkName= "Apple Store Account "/>
                <FooterProps linkUrl = "#" linkName= "iCloud.com"/>
              </ul>					
            </div> 
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>
              <ul>
              <FooterProps linkUrl = "#" linkName= "Find a Store"/>
              <FooterProps linkUrl = "#" linkName= "Genius Bar"/>
              <FooterProps linkUrl = "#" linkName= "Today at Apple"/>
              <FooterProps linkUrl = "#" linkName= "Apple Camp"/>
              <FooterProps linkUrl = "#" linkName= "Field Trip"/>
              <FooterProps linkUrl = "#" linkName= "Apple Store App"/>
              <FooterProps linkUrl = "#" linkName= "Refurbished and Clearance"/>
              <FooterProps linkUrl = "#" linkName= "Financing"/>
              <FooterProps linkUrl = "#" linkName= "Apple Trade In"/>
              <FooterProps linkUrl = "#" linkName= "Order Status"/>
              <FooterProps linkUrl = "#" linkName= "Shopping Help"/>
              </ul>
            </div>  
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>
              <ul>
              <FooterProps linkUrl = "#" linkName= "Apple and Bussiness"/>
              <FooterProps linkUrl = "#" linkName= "Shop for Bussiness"/>              
              </ul>		
              <h3>For Education</h3>
              <ul>
              <FooterProps linkUrl = "#" linkName= "Apple and Education"/>
              <FooterProps linkUrl = "#" linkName= "Shop for College"/>
              </ul>
              <h3>For Healthcare</h3>
              <ul>
              <FooterProps linkUrl = "#" linkName= "Manage Your Apple ID"/>
              <FooterProps linkUrl = "#" linkName= "Apple Store Account"/>
              <FooterProps linkUrl = "#" linkName= "iCloud.com"/>
              </ul>	
              <h3>For Government</h3>
              <ul>
              <FooterProps linkUrl = "#" linkName= "Apple and Education"/>
              <FooterProps linkUrl = "#" linkName= "Shop for College"/>
              </ul>
            </div> 
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>
              <ul>
              <FooterProps linkUrl = "#" linkName= "Find a Store"/>
              <FooterProps linkUrl = "#" linkName= "Genius Bar"/>
              <FooterProps linkUrl = "#" linkName= "Today at Apple"/>
              <FooterProps linkUrl = "#" linkName= "Apple Camp"/>
              <FooterProps linkUrl = "#" linkName= "Field Trip"/>
              <FooterProps linkUrl = "#" linkName= "Apple Store App"/>
              </ul>
              <h3>About Apple</h3>
              <ul>
              <FooterProps linkUrl = "#" linkName= "Find a Store"/>
              <FooterProps linkUrl = "#" linkName= "Genius Bar"/>
              <FooterProps linkUrl = "#" linkName= "Today at Apple"/>
              <FooterProps linkUrl = "#" linkName= "Apple Camp"/>
              <FooterProps linkUrl = "#" linkName= "Field Trip"/>
              <FooterProps linkUrl = "#" linkName= "Apple Store App"/>
              </ul>						
            </div> 
          </div>
          <div className="my-apple-wrapper"> 
            More ways to shop: <a href="https://www.apple.com">Find an Apple Store</a> or <a href="https://www.apple.com">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
              <FooterProps linkUrl = "#" linkName= "Privacy Policy"/>
              <FooterProps linkUrl = "#" linkName= "Terms of Use"/>
              <FooterProps linkUrl = "#" linkName= "Sales and Refunds"/>
              <FooterProps linkUrl = "#" linkName= "Legal"/>
              <FooterProps linkUrl = "#" linkName= "Site Map"/>
              </ul>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper"><img alt="image" src={flag} /></div> <div className="footer-country-name">United States</div> 
            </div>
          </div>
        </div>
      </footer> 
        );
    }
}

export default Footer;
