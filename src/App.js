import React, { Component } from 'react';

import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">



        <Nav />
        <Main />
        <Footer />


      </div>
    );
  }
}

export default App;
