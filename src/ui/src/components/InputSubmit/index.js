import React, { Component } from 'react';
import './style.css';

const ENTER_CODE = 13;

export default class InputSubmit extends Component {
  state = { input: '' };

  handleChange = e => this.setState({ input: e.target.value });

  hasName = name => name !== undefined && name !== '';

  handleClick = () => {
    if (this.state.input === '') {
      return;
    }
    const { name, onClickAction } = this.props;
    const message = this.hasName(name)
      ? { name, data: this.state.input }
      : this.state.input;
    onClickAction(message);
    this.setState({ input: '' });
  };

  handleEnter = e => {
    if (e.which === ENTER_CODE) {
      this.handleClick();
    }
  };

  render() {
    return (
      <div className="col-xs-8 col-xs-offset-2 input-group">
        <input
          autoComplete="off"
          value={this.state.input}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
          placeholder={this.props.placeholder}
          className="form-control"
        />
        <span className="input-group-btn">
          <button onClick={this.handleClick} className="btn btn-default">
            Send
          </button>
        </span>
      </div>
    );
  }
}
