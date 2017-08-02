import React, { Component } from 'react';
import Message from '../Message';
import './style.css';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      socket: props.socket,
    };
  }

  componentDidMount() {
    this.state.socket.on('message', message => {
      this.setState({
        messages: [...this.state.messages, message],
      });
    });
  }

  render() {
    return (
      <ul className="messages row col-xs-8 col-xs-offset-2 list-group">
        {this.state.messages.map((m, idx) => <li><Message key={idx} message={m} /></li>)}
      </ul>
    );
  }
}
