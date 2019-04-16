import React from 'react';
import '../Styles_Components/Navbar.css';

const Header = ()=> {
    return(<div className="header-container">
      <div className="header-container__title"></div>
      <div className="header-container__authorisation"></div>
      <div className="header-container__information"></div>
    </div>);
}

export default Header;