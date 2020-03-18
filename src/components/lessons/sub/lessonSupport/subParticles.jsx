import React from "react";
import Particles from "react-particles-js";

export default class SubParticles extends React.Component{
    constructor(props){
        super(props);
        this.ParticlesColor = this.props.color;
    }
    render(){
        return(
            <Particles params={{
                particles: {
                    color: {
                        value: this.ParticlesColor
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                          width: 1,
                          color: this.ParticlesColor
                        },
                        polygon: {
                          nb_sides: 3
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: this.ParticlesColor,
                        opacity: 0.9,
                        width: 1
                    }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                }},
                modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                }
            } } className = "sub-particles"/>
        );
    }
}