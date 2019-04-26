import React from "react";

class Navigation extends React.Component {
    render() {
        return(
            <ul className="header-container__navigation__items">
                <li className="header-container__navigation__items__el"><a href="/">Home</a></li>
                <li className="header-container__navigation__items__el">
                    <a href="/">
                        Products
                        <span className="header-container__navigation__items__el__badge">
                            <span>Catalog</span>
                        </span>
                    </a>
                </li>
                <li className="header-container__navigation__items__el"><a href="/">Blogs</a></li>
                <li className="header-container__navigation__items__el"><a href="/">Sale</a></li>
                <li className="header-container__navigation__items__el"><a href="/">About us</a></li>
                <li className="header-container__navigation__items__el"><a href="/">Contact us</a></li>
            </ul>
        )
    }
}

export default Navigation