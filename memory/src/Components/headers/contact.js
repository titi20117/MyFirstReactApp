import React from 'react';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            phoneNumber: "(7)920-991-23-85"
        }
    }
    render() {
        return(
            <div className="header-container__contact">
                <i className="fa fa-phone"></i>
                <span className="">{this.state.phoneNumber}</span>
            </div>
        )
    }
}

export default Contact