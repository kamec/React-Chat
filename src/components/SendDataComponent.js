import React, { Component } from 'react';
import './SendDataComponent.css';

export default class SendDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
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

  handleEnter(e) {
    const ENTER_CODE = 13;
    if (e.which === ENTER_CODE) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div className={'col-xs-8 col-xs-offset-2 input-group'}>
        <input
          autoComplete="off"
          value={this.state.input}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
          placeholder={this.props.placeholder}
          className={'form-control'}
        />
        <span className={'input-group-btn'}>
          <button
            onClick={this.handleClick}
            className={'btn btn-default'}
          >
            Send
          </button>
        </span>
      </div>
    );
  }
}
