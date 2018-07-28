import React, { Component } from 'react';
import axios from 'axios';

export default class LoginForm extends Component {
  constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

  handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        axios
            .post("/api/v1/tokens", {
                email, password
            })
            .then(response => {
                window.localStorage.setItem('jwt', response.data.jwt);
                this.setState({
                    email: "",
                    password: ""
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}/>

          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />

          <input
            type="submit"
            value="Log In"/>
        </form>
      </div>
  );
  }
}