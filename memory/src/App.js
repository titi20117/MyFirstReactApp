import React, { Component } from 'react';
import './App.css';
import Banner from './Components/PromoBanner';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Header />
        {/* <Section />
        <Footer /> */}
      </div>
    );
  }
}

export default App;