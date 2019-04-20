import React from 'react';
import '../Styles_Components/Header.scss';
import Description from './headers/description';
import Data from './datas/headerData';
import Search from './headers/search';

class Header extends React.Component {
  render() {
    const ShopHeaderTitle = <Description 
          shopHeaderTitle={Data[0].title.shopDescriptionTitle}
          shopSmallDescription={Data[0].title.smallDescriptionTitle}
          />,
          SearchItem = <Search />
    ;
    return(
    <div className="header-container">
      {ShopHeaderTitle}
      {SearchItem}
      <div className="header-container__authorisation"></div>
      <div className="header-container__information"></div>
    </div>)
  }
}

export default Header;