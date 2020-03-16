import React from "react";

export default class Contact extends React.Component{
    render(){
        return(
            <div className="contact-section">
                <header className="main-header">Contact us</header>
                <section className="contact-content">If you want to contact us, write to us on: </section>
                <section className="contact-ways">
                    <div className="contact-item">Facebook</div>
                    <div className="contact-item">Instagram</div>
                    <div className="contact-item">Or just write an email to us</div>
                </section>
                <footer className="sgk-footer">© 2020 SGK News</footer>
            </div>
        );
    }
}