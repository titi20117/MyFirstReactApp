import React from 'react';
import '../Styles_Components/Footer.scss';

class Footer extends React.Component {
    render() {
        const date = new Date();
        return(
        <div className="footer">
        <span className="footer__title">make by @Fernand frontend developper {date.getHours()} o'clock</span>
        </div>)
    }
}

export default Footer;