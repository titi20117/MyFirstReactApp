import React from 'react';
import '../../Styles_Components/PromoBanner.scss';

class Info extends React.Component {
    render() {
        return(
            <div className="banner__container__title">
                <span>{this.props.shopTitle}</span>
            </div>
        );
    }
}

export default Info
