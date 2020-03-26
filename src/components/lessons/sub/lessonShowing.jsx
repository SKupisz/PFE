import React from "react";
import Loader from "react-loader";
import ReactHtmlParser from "react-html-parser";

import Table from "./lessonSupport/table.jsx";
import Picture from "./lessonSupport/picture.jsx";

export default class Lesson extends React.Component{
    constructor(props){
        super(props);
        this.GetTheItems = this.GetTheItems.bind(this);
        this.FirstStep = this.FirstStep.bind(this);
        this.loadTheContent = this.loadTheContent.bind(this);
        
        this.loaderRef = React.createRef();
        this.contentRef = React.createRef();

        this.FirstStep();
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
            this.goForIt = 1;
        }
    }
    GetTheItems(){
        const itemsToReturn = [];
        let counter = 1,item = "item"+counter;
        while(this.data.hasOwnProperty(item)){
            let tempItem = this.data[item];
            if(tempItem["type"] == "Table"){
                if(tempItem.hasOwnProperty("ifSound") == true){
                    itemsToReturn.push(<Table english = {tempItem["english"]} polish = {tempItem["polish"]} spoken = {tempItem["ifSound"]} />);
                }
                else{
                    itemsToReturn.push(<Table english = {tempItem["english"]} polish = {tempItem["polish"]} spoken = "block"/>);
                }
            }
            else if(tempItem["type"] == "Picture"){
                itemsToReturn.push(<Picture url = {tempItem["src"]} class = {tempItem["class"]}/>);
            }
            else if(tempItem["type"] == "presenting"){
                let len = tempItem["items"]["classes"].length;
                let elements = [];
                for(let i = 0; i < len; i++){
                    elements.push(<div className={"table-item "+tempItem["items"]["classes"][i]}>{tempItem["items"]["contents"][i]}</div>);
                }
                let TableElems = React.createElement("div",{className: tempItem["class"]}, elements);
                itemsToReturn.push(TableElems);
            }
            else{
                let nextElement = React.createElement(tempItem["type"],{className: tempItem["class"]},ReactHtmlParser(tempItem["content"]));    
                itemsToReturn.push(nextElement);              
            }
            counter++;
            item = "item"+counter;
        }
        return itemsToReturn;
    }
    loadTheContent(){
        setTimeout(()=>{
            this.contentRef.current.classList.remove("dissapeared");
        },2000);
    }
    render(){
        this.loadTheContent();
        return(
            <section className="lesson-container">
                      <Loader loaded={false} lines={13} length={20} width={10} radius={30}
                corners={1} rotate={1} direction={1} color={["#ff0000","#fff"]} speed={1}
                trail={60} shadow={true} hwaccel={false} className="spinner"
                zIndex={2e9} top="50%" left="50%" scale={1.00}
                loadedClassName="main-lesson-container" ref = {this.loaderRef}/>  
                <section className="main-lesson-container dissapeared" ref = {this.contentRef}>
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

            </section>
        );
    }
}