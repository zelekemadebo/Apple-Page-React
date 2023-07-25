import React from 'react';
import { Link } from 'react-router-dom';


function Nav({link}) {
        return (
            <>
            {link.map((item, index)=>{
                return<li className="nav-item" key={index}>
                <Link className="nav-link js-scroll-trigger" 
                to={item[0]}>
                     {item[1]}
                </Link>
            </li>
            })}
             </>   
           
        );
    
}

export default Nav;
