import React, { Component } from 'react';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      socket: props.socket,
    };
  }
  
  componentDidMount() {
    this.state.socket.on('message', (data) => {
      this.setState({messages: [...this.state.messages, data]});
    })
  }
  
  render() {
    return (
      <ul>
        {this.state.messages.map(m => <li>{m}</li>)}
      </ul>
    );
  }
}
