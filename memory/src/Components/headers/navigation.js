import React from "react";

class Navigation extends React.Component {
    render() {
        return(
            <ul className="header-container__navigation__items">
                <li className="header-container__navigation__items__list all-list"><a href="/">Home</a></li>
                <li className="header-container__navigation__items__el all-list">
                    <a href="/">
                        Products
                        <span className="header-container__navigation__items__el__badge">
                            <span>Catalog</span>
                        </span>
                    </a>
                </li>
                <li className="header-container__navigation__items__el all-list"><a href="/">Blogs</a></li>
                <li className="header-container__navigation__items__el all-list">
                    <a href="/">
                        Sale
                        <span className="header-container__navigation__items__el__badge">
                            <span>Hot Deals</span>
                        </span>
                    </a>
                </li>
                <li className="header-container__navigation__items__list all-list"><a href="/">About us</a></li>
                <li className="header-container__navigation__items__list all-list"><a href="/">Contact us</a></li>
            </ul>
        )
    }
}

export default Navigation