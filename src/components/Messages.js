import React, { Component } from 'react';
import './Messages.css';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ data: 'hey', date: new Date() }],
      socket: props.socket,
    };
  }

  componentDidMount() {
    this.state.socket.on('message', message => {
      const { data, date } = message;
      this.setState({
        messages: [
          ...this.state.messages,
          { data: data, date: new Date(date) },
        ],
      });
    });
  }

  render() {
    return (
      <ul id={'messages'} className={' col-xs-8 col-xs-offset-2'}>
        {this.state.messages.map(m =>
          <li className={'list-group-item'}>
            <p>
              {m.data}
            </p>
            <p>
              {m.date.toLocaleTimeString()} 
              {' '}
              {m.date.toLocaleDateString()}
            </p>
          </li>,
        )}
      </ul>
    );
  }
}
