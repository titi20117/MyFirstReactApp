//Компонент кот позволить отображать товар
import React from 'react';
import '../../../Styles_Components/Section/main.scss';

class Main extends React.Component {
    constructor(){
        super();
        this.state=({
            title: "Collection",
        });
    }
    render() {
        return(
            <div className="section__container__row__main products">
                <h2 className="products__heading">Products</h2>
                <div className="products__main">
                    <div className="products__main__item">
                        <div className="products__main__item__wrapper">
                            <div className="products__main__item__wrapper__img">
                                <a className="img-Change" href="/">
                                    <img src="ssss" alt="item"/>
                                </a>
                            </div>
                            <div className="products__main__item__wrapper__info">
                                <div className="products__main__item__wrapper__info__price">
                                    <span>995$</span>
                                </div>
                                <div className="products__main__item__wrapper__info__name">
                                    <span>Nike Vapor</span>
                                </div>
                                <div className="products__main__item__wrapper__info__description">
                                    <span>Кеды мужские Nike Vapor elastic</span>
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
                </div>
            </div>
        )
    }
}

export default Main;