import React from "react";
import { Route } from "react-router-dom";

import First from "./main/firstView.jsx";
import RenderLesson from "./main/renderLesson.jsx";

export default class Lessons extends React.Component{
    render(){
        return(
            <section className="lessons-section">
                <Route exact path = "/lessons" component = {First}/>
                <RenderLesson/>
            </section>
        );
    }
}