import React from 'react';
import io from 'socket.io-client';
import MainPage from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="wrapper col-xs-12">
      <MainPage socket={io()} />
    </div>
  );
}
