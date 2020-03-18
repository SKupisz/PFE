import React from "react";
import Particles from "react-particles-js";

export default class Desc extends React.Component{
    render(){
        return(
            <div className="describe-section">
                <Particles  params={{
            		particles: {
                        number: {
                            value: 80,
                            density: {
                              enable: true,
                              value_area: 700
                            }
                          },
                        color: {
                            value: "#000"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                              width: 3,
                              color: "rgba(1,1,1,.4)"
                            },
                            polygon: {
                              nb_sides: 15
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#111",
                            opacity: 0.4,
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
                    }}
            	} } className = "main-particles"/>
                <header className="main-header">Welcome to PFE</header>
                <div className="short-describe">Do you want to start learning Polish, but don't know where to start?
                    No problem! PFE, which stands for Polish For Everyone is a website that will help you to learn this lovely language.</div>
                <header className="describe-header right">How does it work?</header>
                <div className="short-describe right">Really simple - just go to the lessons subsection and pick what you want 😉. If you don't understand something, don't panic - just write to us or check out on the internet.</div>
                <header className="describe-header middle">Who is running this?</header>
                <div className="short-describe middle">This app is directly designed by the journalist web service SGK-news. We decided to create the PFE after we realised that as SGK-news is sharing freedom of speaking and publishing, the PFE will help a lot of people to learn Polish.
                 If you are interested, go to <a href="https://sgk-news.pl" target="_blank" rel="noopener noreferrer">sgk-news.pl</a> to see what the SGK-news is.</div>
                 <footer className="sgk-footer">© 2020 SGK News</footer>
            </div>
        );
    }
}