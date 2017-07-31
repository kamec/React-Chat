import React, { Component } from 'react';
import io from 'socket.io-client';
import MainPage from './components/MainPage.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'wrapper col-xs-12'}>
        <MainPage socket={io()} />
      </div>
    );
  }
}

export default App;
