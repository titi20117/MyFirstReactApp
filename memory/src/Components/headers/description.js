import React from 'react';
import logo from '../headers/logo/logo.png'
class Description extends React.Component {
    constructor() {
        super()
        this.state = {
            image: logo,
            href: "#"
        }
    }
    render() {
        return (
        <div className="header-container__title">
            <a href={this.state.href}><img src={this.state.image} alt="Sport Store"/></a>
        </div>)
    }
}
export default Description