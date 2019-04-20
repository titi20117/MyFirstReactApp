import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="header-container__search-form">
                <form action="" method="get" className="form-inline my-2 my-lg-0">
                    <input type="text" className="form-control mr-sm-1"/>
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search