//Компонент кот позволить отображать товар
import React from 'react';
import '../../../Styles_Components/Section/main.scss';
import ProductsData from './productData';
// import '../productsImages/';

class Main extends React.Component {
    constructor(){
        super();
        this.state=({
            db: []
        });
        this.showProducts();
    }
    showProducts(){
        fetch("http://localhost/backend_Shop/api/")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
            console.log(this.state.db);
        })
    }
    render() {
        return(
            <div className="section__container__row__main products">
                {/* <ProductsData arrayProducts={this.state.db} /> */}
                <h2 className="products__heading">Products</h2>
                <div className="products__main">
                    <ProductsData arrayProducts={this.state.db} />
                    <div className="products__main__item">
                        <div className="products__main__item__wrapper">
                            <div className="products__main__item__wrapper__img">
                                <a className="img-Change" href="/">
                                    <img src="http://localhost:3000/../productsImages/adidas1.jpg" alt="item"/>
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