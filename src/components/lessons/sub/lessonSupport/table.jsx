import React from "react";
import Speech from "react-speech";

export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.en = this.props.english;
        this.pl = this.props.polish;
        this.if = this.props.spoken;
    }
    render(){
        const items = [];
        const style = {
            play: {
              button: {
                width: '28',
                height: '28',
                cursor: 'pointer',
                pointerEvents: 'none',
                outline: 'none',
                backgroundColor: 'yellow',
                border: 'solid 1px rgba(255,255,255,1)',
                borderRadius: 6
              },
            }
          };
        for(let i = 0 ; i < this.pl.length; i++){
            if(i < this.en.length){
                items.push(<div className="row-container">
                <div className="word-container">{this.en[i]}</div>
                <Speech rate ={0.9} textAsButton = {true} displayText = {"🔊"} voice="Google UK English Female" text={this.en[i]} />
                <div className="word-breaker"></div>
                <div className="word-container">{this.pl[i]}</div>
                <Speech rate ={0.9} textAsButton = {true} displayText = {"🔊"} voice="Google polski" text={this.pl[i]} />
            </div>);
            }
            else{
                if(this.if == "block"){
                    items.push(<div className="row-container">
                    <div className="word-container alone-container">{this.pl[i]}</div>
                    <Speech rate ={0.9} textAsButton = {true} displayText = {"🔊"} voice="Google polski" text={this.pl[i]} />
                </div>);  
                }
                else{
                    items.push(<div className="row-container">
                    <div className="word-container alone-container">{this.pl[i]}</div>
                </div>);                      
                }
             
            }
           
        }
        return(
            <div className="language-table">
                {items}
            </div>
        );
    }
}