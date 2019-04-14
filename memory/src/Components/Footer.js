import React from 'react';
import '../Styles_Components/Footer.css';

const Footer = ()=> {
    const date = new Date();
    return (<div className="footer-title">
        <span>make by @Fernand frontend developper {date.getHours()} o'clock</span>
        </div>);
}

export default Footer;