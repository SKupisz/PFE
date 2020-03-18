import React from "react";
import {Route,Link} from "react-router-dom";

import Lesson from "./lessonShowing.jsx";
import SubParticles from "./lessonSupport/subParticles.jsx";

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.giveTheLinks = this.giveTheLinks.bind(this);
        this.linksTitles = [];
        this.linksDescs = [];
    }
    giveTheLinks(){
        let counter = 1;
        let titleArray = [];
        let descArray = [];

        let lengthCheck = require("../data/about.json");
        let len = lengthCheck["quantity"];

        while(counter <= len){
            let tempReq = require("../data/"+counter+"/main.json");
            titleArray.push(tempReq["title"]);
            descArray.push(tempReq["describeForLessonsSection"]);
            counter++;
        }
        this.linksTitles = titleArray;
        this.linksDescs = descArray;
    }
    render(){
        this.giveTheLinks();
        let linksItems = [];
        const colors = ["#e6ccff","#80ff9f","#8080ff"];
        let toLesson = "";
        for(let i = 0 ; i < this.linksTitles.length; i++){
            toLesson = "/lessons/"+(i+1);
            linksItems.push(
            <Link to = {toLesson}>
                <div className="lesson-container">
                <SubParticles color = {colors[i%3]}/>
            <header className="lesson-header">{this.linksTitles[i]}</header>
                    <div className="lesson-describe">{this.linksDescs[i]}</div>
                </div>
            </Link>);
        }
        linksItems = linksItems.reverse();
        return(
            <section className="lessons-content">
                {linksItems}
            </section>
        );  
    }
}