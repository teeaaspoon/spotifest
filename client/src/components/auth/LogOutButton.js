import React, { Component } from 'react';

export default class LogOutButton extends Component {
  handleClick = e => {
      window.localStorage.clear();
    };

  render() {
    return (
        <button onClick={this.handleClick}>Log Out</button>
  );
  }
}