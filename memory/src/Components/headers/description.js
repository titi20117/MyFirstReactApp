import React from 'react';
class Description extends React.Component {
    constructor() {
        super()
        this.state = {
            logoName: "S",
            href: "#"
        }
    }
    render() {
        return (
        <div className="header-container__title">
            <a href={this.state.href}><span className="header-container__title__logoName">{this.state.logoName}</span></a>
            <span className="header-container__title__secondTitle">{this.props.shopHeaderTitle}</span>
            <span className="header-container__title__description">{this.props.shopSmallDescription}</span>
        </div>)
    }
}
export default Description