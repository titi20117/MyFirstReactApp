import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;