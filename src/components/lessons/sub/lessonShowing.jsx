import React from "react";

import Table from "./lessonSupport/table.jsx";

export default class Lesson extends React.Component{
    constructor(props){
        super(props);
        this.GetTheItems = this.GetTheItems.bind(this);
        this.FirstStep = this.FirstStep.bind(this);
        this.FirstStep();
        this.tableEnglish = ["Hello","Hi"];
        this.tablePolish = ["Cześć","Hej"];
    }
    FirstStep(){
        this.lessonAddress = window.location.href;
        this.lessonAddress = this.lessonAddress.substring(this.lessonAddress.indexOf("lessons")+8);
        if(!(this.data = require("../data/"+this.lessonAddress+"/main.json"))){
            this.ifLessonExists = -1;
        }
        else{
            this.ifLessonExists = 1;
            this.data = require("../data/"+this.lessonAddress+"/main.json");
        }
        if(this.ifLessonExists == 1){
            this.title = this.data["title"];
            this.preface = this.data["preface"];
            this.items = this.GetTheItems();
        }
    }
    GetTheItems(){
        const itemsToReturn = [];
        let counter = 1,item = "item"+counter;
        while(this.data.hasOwnProperty(item)){
            let tempItem = this.data[item];
            if(tempItem["type"] != "Table"){
                let nextElement = React.createElement(tempItem["type"],{className: tempItem["class"]},tempItem["content"]);    
                itemsToReturn.push(nextElement);
            }
            else{
                itemsToReturn.push(<Table english = {tempItem["english"]} polish = {tempItem["polish"]}/>);
            }
            counter++;
            item = "item"+counter;
        }
        return itemsToReturn;
    }
    render(){
        return(
            <section className="lesson-container">
                <header className="main-header">{this.title}</header>
                <div className="fp-container">
                    <div className="trapezoid-container">
                    </div>
                    <div className="first-paragraph">
                        <div className="p-textContainer">
                        {this.preface}
                        </div>
                    </div>
                </div>
                {this.items}
            </section>
        );
    }
}