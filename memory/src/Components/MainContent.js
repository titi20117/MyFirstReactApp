import React from 'react';
import '../Styles_Components/MainContent.css';
import Joke from './Joke';
import JokesData from './jokesData';


let MainContent = ()=> {
    const jokeComponents = JokesData.map(joke => {
        return (    
            <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
        );
    });
    return(<div className="bloc-container">
            {jokeComponents}
            
            {/* <div className="bloc-container__section bloc-container__second-section">
                
            </div>
            <div className="bloc-container__section bloc-container__third-section">
                
            </div>
            <div className="bloc-container__section bloc-container__fourth-section">
                
            </div> */}
        </div>);
}

export default MainContent;