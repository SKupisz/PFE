import React from "react";

export default class Picture extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <a href={this.props.url} download target = "_blank">
                <img src = {this.props.url} className = {this.props.class}/>
            </a>
            
        );
    }
}