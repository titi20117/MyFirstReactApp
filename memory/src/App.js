import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Fernand Moudio",
      age: 26,
      isLoggedIn: true,
      count: 0,
    }
    //to bind method to make sure is inside the constructor coz i can may not work
    //when is binded it can run setState
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = ()=> {
    //prevState(old value) for setting a new value from the old value declared inside the constructor
      this.setState(prevState => {
        return {
          count:  prevState.count + 1
        }
      })
  }
  render() {
    let wordDidplay;
    if (this.state.isLoggedIn === true) {
      wordDidplay = "in";
    } else {
      wordDidplay = "out";
    }
    return (
      <div className="App">
        <div className="title">
          <h1>{this.state.name} {wordDidplay}</h1>
          <h3>{this.state.age}</h3>
        </div>
        <div>
          <p>i am a web fronted debelopper</p>
          <h2>{this.state.count}</h2>
          <button onClick={this.handleClick}>change</button>
        </div>
        <div className="App-Section">
          <Navbar />
          <MainContent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;