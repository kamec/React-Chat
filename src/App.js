import React, { Component } from 'react';
import io from 'socket.io-client';
import MainPage from './components/MainPage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <MainPage socket={io()}/>
    );
  }
}

export default App;
