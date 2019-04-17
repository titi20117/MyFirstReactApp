import React from 'react';
import Info from './banner/infoBanner';
import Data from './datas/bannerData';
import '../Styles_Components/PromoBanner.scss';

const Banner = ()=> {
    const ShopTitle = <Info shopTitle={Data[0].title.shopTitle}/>;
    return(
    <div className="banner-container">
        {ShopTitle}
        <div className="banner-container__notifications">
            <div className="banner-container__notifications__time"><span>0</span><span>days</span></div>
            <div className="banner-container__notifications__time"><span>0</span><span>hours</span></div>
            <div className="banner-container__notifications__time"><span>0</span><span>minutes</span></div>
            <div className="banner-container__notifications__time"><span>0</span><span>seconds</span></div>
        </div>
    </div>);
}

export default Banner