import React, { Component } from 'react';
import './style.css';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ data: 'hey' }],
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
      <div className="">
        <ul id="messages" className="row col-xs-8 col-xs-offset-2 list-group">
          {this.state.messages.map(m => {
            console.log(m);
            return (
              <li className="list-group-item">
                <span className="name">
                  {m.name}
                </span>
                {': '}
                <span>
                  {m.data}
                </span>
                <p>
                  {m.date}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
