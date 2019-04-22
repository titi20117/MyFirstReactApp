import React from 'react';
import '../Styles_Components/Header.scss';
import Description from './headers/description';
import Data from './datas/headerData';
import Search from './headers/search';
import Contact from './headers/contact';
import Social from './headers/social';

class Header extends React.Component {
  render() {
    const SocialHeader = <Social />,
          ShopHeaderTitle = <Description />,
          SearchItem = <Search />,
          ContactInfo = <Contact />
    ;
    return(
    <div className="header">
      <div className="container header-container">
        {SocialHeader}
        <div className="row">
          {ShopHeaderTitle}
          {SearchItem}
          {ContactInfo}
        </div>
        <div className="header-container__authorisation"></div>
        <div className="header-container__information"></div>
      </div>
    </div>  
    )
  }
}

export default Header;