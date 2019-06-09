//Компонент кот позволить отображать товар
import React from 'react';
import '../../../Styles_Components/Section/main.scss';
import ProductsData from './productData';

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
                <h2 className="products__heading">Products</h2>
                <ProductsData arrayProducts={this.state.db} />
            </div>
        )
    }
}

export default Main;