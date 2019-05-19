import React from 'react';
import '../../../Styles_Components/Section/sidebar.scss';

class Collection extends React.Component {
    
    constructor(){
        super();
        this.state=({
            title: ""
        });
        this.setTitle();
    }

    setTitle() {
        this.setState({
            title: "Collection"
        })
    }

    render() {
        return(
            <div className="section__container__row__sidebar__collection">
                <h3 className="section__container__row__sidebar__collection__title">{this.state.title}</h3>
                <div className="section__container__row__sidebar__collection__content">
                    <ul className="section__container__row__sidebar__collection__content__list">
                        <li className="section__container__row__sidebar__collection__content__list__kedi">
                            <a href="/collections/kedi" title="Kedi">Кеды</a>
                        </li>
                        <li className="section__container__row__sidebar__collection__content__list__fitball">
                            <a href="/collections/fitball" title="fitball">Мячи для фитнеса</a>
                        </li>
                        <li className="section__container__row__sidebar__collection__content__list__boots">
                            <a href="/collections/boots" title="boots">Футбольные бутсы</a>
                        </li>
                        <li className="section__container__row__sidebar__collection__content__list__shorts">
                            <a href="/collections/shorts" title="shorts">Футбольные шорты</a>
                        </li>
                        <li className="section__container__row__sidebar__collection__content__list__jersey">
                            <a href="/collections/jersey" title="jersey">Бутболки для футбола</a>
                        </li>
                        <li className="section__container__row__sidebar__collection__content__list__gaiters">
                            <a href="/collections/gaiters" title="gaiters">Гетры для футбола</a>
                        </li>
                        <li className="section__container__row__sidebar__collection__content__list__jumpers">
                            <a href="/collections/jumpers" title="jumpers">Джемперы</a>
                        </li>
                        <li className="section__container__row__sidebar__collection__content__list__jackets">
                            <a href="/collections/jackets" title="jackets">Куртки</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Collection;