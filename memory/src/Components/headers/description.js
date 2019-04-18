import React from 'react';
class Description extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (<div><span>{this.props.shopDescriptionTitle}</span></div>)
    }
}
export default Description