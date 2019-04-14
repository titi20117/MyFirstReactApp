import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Fernand Moudio</h1>
        </div>
        <div>
          <p>i am a web fronted debelopper</p>
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