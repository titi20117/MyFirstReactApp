import React from 'react';
import '../../../Styles_Components/Section/main.scss';

class ProductsData extends React.Component {
    render() {
        return(
            <div className="products__main">
                {this.props.arrayProducts.map(row =>
                    <div className="products__main__item">
                        <div className="products__main__item__wrapper">
                            <div className="products__main__item__wrapper__img">
                                <a className="img-Change" href="/">
                                    <img src={row.src} alt="item"/>
                                </a>
                            </div>
                            <div className="products__main__item__wrapper__info">
                                <div className="products__main__item__wrapper__info__price">
                                    <span>{row.price}</span>
                                </div>
                                <div className="products__main__item__wrapper__info__name">
                                    <span>{row.brand}</span>
                                </div>
                                <div className="products__main__item__wrapper__info__description">
                                    <span>{row.description}</span>
                                </div>
                                <div className="row products__main__item__wrapper__info__link">
                                    <form method="post" action="/cart/add">
                                        <input type="hidden" name="id" value="4792929668"/>
                                        <button className="btn btn-cart" type="submit">
                                            <i className="fa fa-shopping-cart"></i>
                                        </button>
                                    </form>
                                    <a className="btn" href="/" title="More info">
                                        <i className="fa fa-info"></i>
                                    </a>
                                    <a className="btn quick_view_btn" href="/" title="Quick view">
                                        <i className="fa fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>    
                )}
            </div>
              
            
        )
    }
}

export default ProductsData;