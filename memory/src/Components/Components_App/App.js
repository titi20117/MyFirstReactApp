import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello <code>src/App.js</code> Welcome to react.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className="title">
          <h1>Fernand Moudio</h1>
        </div>
        <div>
          <p>i am a web fronted debelopper</p>
        </div>
        <div className="list-vacations">
          <ul
            className="myLink"
          >
            <li>HTML5</li>
            <li>PHP</li>
            <li>Phyton</li>
            <li>JavaScript</li>
            <li>MySql</li>
            <li>CSS3</li>
            <li>ReactJs</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;