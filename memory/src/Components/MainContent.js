import React from 'react';
import '../Styles_Components/MainContent.css';
import Joke from './Joke';


let MainContent = ()=> {
    return(<div className="bloc-container">
            <Joke 
                list = {{number:1, question: "Ronaldo is playing in Porto?", punchLine: "you are stupid"}}
            />
            <Joke 
                list = {{number:2, question: "Ronaldo is playing in Porto?", punchLine: "you are stupid"}}
            />
            <Joke 
                list = {{number:3, question: "Ronaldo is playing in Porto?", punchLine: "you are stupid"}}
            />
            <Joke 
                list = {{number:4, question: "Ronaldo is playing in Porto?", punchLine: "you are stupid"}}
            />
            <Joke 
                list = {{number:5, question: "Ronaldo is playing in Porto?", punchLine: "you are stupid"}}
            />
            
            {/* <div className="bloc-container__section bloc-container__second-section">
                
            </div>
            <div className="bloc-container__section bloc-container__third-section">
                
            </div>
            <div className="bloc-container__section bloc-container__fourth-section">
                
            </div> */}
        </div>);
}

export default MainContent;