import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

class App extends Component {
  render() {
    return (
      <div >
        <Header title='First React site' logosrc = "/images/logo.png"></Header>
          <div id='wrapper'>
        <Menu items={ ['Home', 'Services', 'About', 'Contact us'] }/>
        <Content></Content>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
