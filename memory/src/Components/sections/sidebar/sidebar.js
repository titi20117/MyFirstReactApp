import React from 'react';
import '../../../Styles_Components/Section/sidebar.scss'
import Collection from './colletion';

class Sidebar extends React.Component {
    render() {
        return(
            <div className="section__container__row__sidebar">
                <Collection />
            </div>
        )
    }
}

export default Sidebar;