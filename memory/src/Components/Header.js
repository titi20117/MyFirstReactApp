import React from 'react';
import '../Styles_Components/Header.scss';
import Description from './headers/description';
import Data from './datas/headerData';

class Header extends React.Component {
  render() {
    const ShopTitle = <Description shopTitle={Data[0].title.shopTitle}/>;
    return(<div className="header-container">
      {ShopTitle}
      <div className="header-container__title">
      </div>
      <div className="header-container__authorisation"></div>
      <div className="header-container__information"></div>
    </div>)
  }
}

export default Header;