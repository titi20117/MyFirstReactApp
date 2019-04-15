import React from 'react';

const Joke = (props) => {
    return(
        <div className="bloc-container__section bloc-container__first-section">
            <p>{props.list.number} question: <h3>{props.list.question}</h3></p>
            <p style={{color: props.list.question && "#888888"}}>punchline: {props.list.punchLine} </p>
        </div>
    );
}

export default Joke