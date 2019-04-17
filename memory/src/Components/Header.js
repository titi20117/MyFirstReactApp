import React from 'react';
import '../Styles_Components/Header.css';
import Description from './headers/description';
import Data from './datas/headerData';

console.log(Data[0].description);
const Header = ()=> {
    const ShopTitle = <Description shopTitle={Data[0].title.shopTitle}/>;
    return(<div className="header-container">
        {ShopTitle}
      <div className="header-container__title">
      </div>
      <div className="header-container__authorisation"></div>
      <div className="header-container__information"></div>
    </div>);
}

export default Header;