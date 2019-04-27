import React from 'react';

class Panier extends React.Component {
    render() {
        return(
            <div className="header-container__navigation__panier">
                <a href="/cart">
                    <i className="fa fa-shopping-cart"></i>
                    Cart:
                    <span className="header-container__navigation__panier__cart-items"> 0 </span>
                    item(s)
                </a>
            </div>
        )
    }
}

export default Panier