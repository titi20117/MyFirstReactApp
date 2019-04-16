import React from 'react';

const Joke = (props) => {
    return(
        <div className="bloc-container__section bloc-container__first-section">
            <p>question: <h3>{props.question}</h3></p>
            <p style={{color: props.question && "#888888"}}>punchline: {props.punchLine} </p>
        </div>
    );
}

export default Joke