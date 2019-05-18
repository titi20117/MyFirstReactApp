import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Contacts = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

class Navigation extends React.Component {
  render() {
    return(
      <BrowserRouter history={history}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
        </div>
      </BrowserRouter>
    )
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="title">
//           <h1>Fernand Moudio</h1>
//         </div>
//         <div>
//           <p>i am a web fronted debelopper</p>
//         </div>
//         <div className="App-Section">
//           <Navbar />
//           <MainContent />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

export default Navigation;