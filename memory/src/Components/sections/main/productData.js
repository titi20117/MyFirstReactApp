import React from 'react';
import '../../../Styles_Components/Section/main.scss';

class ProductsData extends React.Component {
    render() {
        return(
            <div className="row products__main">
                {this.props.arrayProducts.map(item =>
                    <div className="products__main__item">
                        <div className="products__main__item__wrapper">
                            <div className="products__main__item__wrapper__img">
                                <a className="img-Change" href="/">
                                    <img src={item.src} alt="item"/>
                                </a>
                            </div>
                            <div className="products__main__item__wrapper__info">
                                <div className="products__main__item__wrapper__info__price">
                                    <span><b>Цена :</b> {item.price} РУб</span>
                                </div>
                                <div className="products__main__item__wrapper__info__name">
                                    <span><b>Бранд :</b> {item.brand}</span>
                                </div>
                                <div className="products__main__item__wrapper__info__description">
                                    <span>{item.description}</span>
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