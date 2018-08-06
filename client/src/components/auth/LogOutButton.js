import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearJwt } from "../../actions/userActions"

class LogOutButton extends Component {

  handleClick = (e) => {
      try {
              window.localStorage.clear(); //eslint-disable-line
              console.log(window.localStorage);
              this.props.clearJwt(this.props.jwt);
              window.location.assign("http://localhost:3000/");

        } catch (error) {
            console.log(error);
        }
  }

  render() {
    return (
        <button onClick={this.handleClick}>LOGOUT</button>
    );
  }
}

const mapStateToProps = state => ({
    jwt: state.user.jwt
});

export default connect(
    mapStateToProps,
    { clearJwt }
)(LogOutButton);