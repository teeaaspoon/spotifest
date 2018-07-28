import React, { Component } from 'react';
import axios from 'axios';

export default class SignUpForm extends Component {
  constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: ""
        };
    }

  handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
        e.preventDefault();
        const { email, password, password_confirmation } = this.state;
        axios
            .post("/api/v1/users", {
              user:{
                email, password, password_confirmation
              }
            })
            .then(response => {
                return axios.post("api/v1/tokens", {
                  email, password
                })
                .then(response => {
                  window.localStorage.setItem('jwt', response.data.jwt);
                  this.setState({
                    email: "",
                    password: "",
                    password_confirmation: ""
                });
                })
            })
            .catch(error => {
                console.log(error);
            });

    };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <p>Email</p>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}/>

          <p>Pass</p>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />

          <p>Pass confirm</p>
          <input
            name="password_confirmation"
            type="password"
            value={this.state.password_confirmation}
            onChange={this.handleChange} />

          <input
            type="submit"
            value="Sign Up"/>
        </form>
      </div>
  );
  }
}