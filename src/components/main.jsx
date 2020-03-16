import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Navbar from "./main/nav.jsx";
import Desc from "./main/description.jsx";
import Contact from "./contact/contact.jsx";
import Lessons from "./lessons/lessons.jsx";
import "../css/main.scss";


export default class Main extends React.Component{
    render(){
        return(
            <div className="main-container">
                <Router>
                    <Navbar/>
                    <Route exact path = "/" component = {Desc}/>
                    <Route path = "/lessons" component = {Lessons}/>
                    <Route path = "/contact" component = {Contact}/>
                </Router>
            </div>
        );
    }
}