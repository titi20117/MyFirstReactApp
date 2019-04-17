import React from 'react';
import '../Styles_Components/Header.css';
import Description from './headers/description';
import Data from './datas/headerData';

const Header = ()=> {
    const ShopTitle = () => {
      return (<Description shopTitle={Data.description}/>)
    }
    return(<div className="header-container">
        {ShopTitle}
      <div className="header-container__title">
      </div>
      <div className="header-container__authorisation"></div>
      <div className="header-container__information"></div>
    </div>);
}

export default Header;