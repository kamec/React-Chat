import React, { Component } from 'react';

export default class SendDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  hasName(name) {
    return name !== undefined && name !== '';
  }

  handleClick() {
    const { name, onClickAction } = this.props;
    const message = this.hasName(name)
      ? `${name}: ${this.state.input}`
      : this.state.input;
    onClickAction(message);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input
          autoComplete="off"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}
