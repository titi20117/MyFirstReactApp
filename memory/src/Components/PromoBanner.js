import React from 'react';
import Info from './banner/infoBanner';
import Data from './datas/bannerData';
import '../Styles_Components/PromoBanner.scss';

class Banner extends React.Component {
    render() {
        const ShopTitle = <Info shopTitle={Data[0].title.shopTitle}/>;
        return(
        <div className="banner-container">
            {ShopTitle}
            <div className="banner-container__notifications">
                <div className="banner-container__notifications__time">
                <div className="banner-container__notifications__time__number">0</div>
                <span className="banner-container__notifications__time__period">days</span></div>
                <div className="banner-container__notifications__time">
                <div className="banner-container__notifications__time__number">0</div>
                <span className="banner-container__notifications__time__period">hours</span></div>
                <div className="banner-container__notifications__time">
                <div className="banner-container__notifications__time__number">0</div>
                <span className="banner-container__notifications__time__period">minutes</span></div>
                <div className="banner-container__notifications__time">
                <div className="banner-container__notifications__time__number">0</div>
                <span className="banner-container__notifications__time__period">seconds</span></div>
            </div>
        </div>
        )
    }
}

export default Banner