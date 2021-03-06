import React, { Component } from 'react';

const ENTER_CODE = 13;

export default class InputSubmit extends Component {
  state = { input: '' };

  handleChange = e => this.setState({ input: e.target.value });

  handleClick = () => {
    const input = this.state.input.trim();
    if (input === '') {
      return;
    }
    const { onClickAction } = this.props;
    onClickAction(input);
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
