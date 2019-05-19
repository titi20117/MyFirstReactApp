import React from 'react';
import '../Styles_Components/Section.scss';
import Sidebar from './sections/sidebar/sidebar';
import Main from './sections/main/main';

class MainContent extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container section__container">
                    <div className="row section__container__row">
                        <Sidebar />
                        <Main />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent;