import React, { Component } from 'react';
import './header.css'
import logo from '../../CommonResources/images/icons/logo-sm.png'
import search from '../../CommonResources/images/icons/search-icon-sm.png'
import cart from '../../CommonResources/images/icons/cart-sm.png';
import Nav from '../props/Nav';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
               <div className="nav-wrapper fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			   			 <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			       			 ☰
			    		</button>
			    <Link className="navbar-brand mx-auto" to="/" ><img alt ="image" src= {logo} /></Link>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">

					< Nav link ={[
						["/mac", 'Mac'],
						["/iphone", 'iphone'],
						["/ipad", 'ipad'],
						["/watch", 'watch'],
						["/tv", 'Tv'],
						["/music", 'Music'],
						["/support", 'Support'],
					]}/>

					<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/search/"><img alt ="image" src={search} /></Link></li>
					<li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/cart/"><img alt ="image" src={cart} /></Link></li>
			        </ul>
			    </div>
			</nav>
		</div>
	            </div> 
            </div>
        );
    }
}

export default Header;
