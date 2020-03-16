import React from "react";

export default class Desc extends React.Component{
    render(){
        return(
            <div className="describe-section">
                <header className="main-header">Welcome to PFE</header>
                <div className="short-describe">Do you want to start learning polish, but don't know where to start?
                    No problem! PFE, which stands for Polish For Everyone is a website that will help you to learn polish.</div>
                <header className="describe-header right">How does it work?</header>
                <div className="short-describe right">Really simple - just go to the lessons subsection and pick what you want 😉. If you don't understand something, don't panic - just write to us or check out on the internet.</div>
                <header className="describe-header middle">Who is running this?</header>
                <div className="short-describe middle">This app is directly designed by the journalist web service SGK-news. We decided to create the PFE after we acknowledged that as SGK-news is sharing freedom of speaking and publishing, the PFE will help a lot of people to learn polish language.
                 If you are interested, go on <a href="https://sgk-news.pl" target="_blank" rel="noopener noreferrer">sgk-news.pl</a> to see what the SGK-news is.</div>
                 <footer className="sgk-footer">© 2020 SGK News</footer>
            </div>
        );
    }
}