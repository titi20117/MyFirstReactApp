import React from 'react';

class Joke extends React.Component {
    render() {
        return (
            <div className="bloc-container__section bloc-container__first-section">
            <p onChange={()=>this.props.handleChange(this.props.question)}>question: <h3>{this.props.question}</h3></p>
            <p style={{color: this.props.question && "#888888"}}>punchline: {this.props.punchLine} </p>
        </div>    
        )
    }
}
// const Joke = (props) => {
//     return(
//         <div className="bloc-container__section bloc-container__first-section">
//             <p>question: <h3>{props.question}</h3></p>
//             <p style={{color: props.question && "#888888"}}>punchline: {props.punchLine} </p>
//         </div>
//     );
// }

export default Joke