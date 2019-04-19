import React from 'react';
class Description extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
        <div className="header-container__title">
            <span className="header-container__title__secondTitle">{this.props.shopHeaderTitle}</span>
            <span className="header-container__title__description">{this.props.shopSmallDescription}</span>
        </div>)
    }
}
export default Description