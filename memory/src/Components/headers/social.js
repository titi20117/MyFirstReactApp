import React from 'react';

class Social extends React.Component {
    render() {
        return(
            <div className="header-container__social">
                <div className="header-container__social__currency form-group">
                    <select  className="form-control" id="currencies" name="currencies">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBR">GBR</option>
                        <option value="RUB">RUB</option>
                    </select>
                </div>
                <ul className="header-container__social__user">
                    <li>
                        <a href="/account/login" id="user_login_link">Log in</a>
                    </li>
                    <li>
                        <a href="/account/register" id="user_register_link">Create an account</a>
                    </li>
                    <li>
                        <a href="/cart">Check out</a>
                    </li>
                </ul>
                <ul className="header-container__social__social-network">
                    <li><a href="//twitter.com"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="//www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="//www.youtube.com/user"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="//www.pinterest.com/"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="//google.com"><i className="fa fa-google-plus"></i></a></li>
                </ul>
                <div className="clearfix"></div>
            </div>
        ) 
    }
}

export default Social