import React from 'react';
import '../Styles_Components/Header.scss';
import Description from './headers/description';
import Data from './datas/headerData';
import Search from './headers/search';
import Contact from './headers/contact';
import Social from './headers/social';
import Navigation from './headers/navigation';
import Panier from './headers/panier';

class Header extends React.Component {
  render() {
    const SocialHeader = <Social />,
          ShopHeaderTitle = <Description />,
          SearchItem = <Search />,
          ContactInfo = <Contact />,
          NavigationHeader = <Navigation />,
          PanierHeader = <Panier />
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
        <div className="col-sm-9 col-sm-offset-3">
          <div className="header-container__navigation">
            {NavigationHeader}
            {PanierHeader}
          </div>
        </div>
      </div>
    </div>  
    )
  }
}

export default Header;