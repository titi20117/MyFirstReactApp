import React, { Component } from 'react';
import './App.scss';
import Banner from './Components/PromoBanner';
import Header from './Components/Header';
import MainContent from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;