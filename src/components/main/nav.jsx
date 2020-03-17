import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="main-nav">
                <Link to = "/">
                    <div className="nav-item mainsite-link">PFE</div>
                </Link>
                <Link to = "/lessons">
                    <div className="nav-item lessons-link">Lessons</div>
                </Link>
                <Link to = "/contact">
                    <div className="nav-item contact-link">Contact</div>
                </Link>
                
                
            </nav>
        );
    }
}