import React from 'react';
import '../../Styles_Components/PromoBanner.scss';

const Info = (props) => {
    return (
    <div className="banner__container__title">
        <span>{props.shopTitle}</span>
    </div>
    );
}

export default Info
