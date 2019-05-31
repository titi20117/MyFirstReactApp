import React from 'react';

class ProductsData extends React.Component {
    render() {
        return(
            <div>
                
                <table className="dataproducts">
                  <thead>
                  <tr>
                      <td>Id</td>
                      <td>Цена</td>
                      <td>Бренд</td>
                      <td>Комментарии</td>
                  </tr>
                  </thead>

                  <tbody>
                    {this.props.arrayProducts.map(
                    row =>
                        <tr key="{row.id}">
                            <td>{row.id}</td>
                            <td>{row.price}</td>
                            <td>{row.brand}</td>
                            <td>{row.description}</td>
                        </tr>
                    )}
                  </tbody>
              </table>
            </div>  
            
        )
    }
}

export default ProductsData;