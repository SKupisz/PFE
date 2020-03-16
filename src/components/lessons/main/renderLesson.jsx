import React from "react";
import {Route} from "react-router-dom";

import Lesson from "../sub/lessonShowing.jsx";

export default class RenderLesson extends React.Component{
    render(){
        return(
            <div className="single-lesson-container">
                <Route exact path = "/lessons/1" component = {Lesson}/>
            </div>
        );
    }
}