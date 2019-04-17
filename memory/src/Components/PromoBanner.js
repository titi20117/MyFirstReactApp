import React from 'react';
import Info from './banner/infoBanner';
import Data from './datas/bannerData';
import '../Styles_Components/PromoBanner.scss';

const Banner = ()=> {
    const ShopTitle = <Info shopTitle={Data[0].title.shopTitle}/>;
    return(<div className="banner-container">
        {ShopTitle}
    </div>);
}

export default Banner