import React from "react";

import List from "../sub/lessonsList.jsx";

export default class First extends React.Component{
    render(){
        return(
            <div className="first-view-container">
                <header className="main-header">Lessons</header>
                <div className="short-describe">In this section you can just lay back and start learning polish with PFE -  Just pick the lessons you want to take and enjoy 😉</div>
                <List/>
            </div>
        );
    }
}