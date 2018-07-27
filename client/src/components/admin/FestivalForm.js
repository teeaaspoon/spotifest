import React, { Component } from "react";
import axios from "axios";

class FestivalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            startDate: "",
            endDate: "",
            city: "",
            country: "",
            artists: "",
            submitStatus: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        const { title, start_date, end_date, city, country } = this.state;
        axios
            .post("/api/v1/festivals", {
                festival: {
                    title,
                    start_date,
                    end_date,
                    city,
                    country
                }
            })
            .then(response => {
                console.log(response);
                this.setState({
                    title: "",
                    start_date: "",
                    end_date: "",
                    city: "",
                    country: "",
                    submitStatus: "Festival Successfully added!"
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    submitStatus:
                        "Couldnt Not Submit, Festival already exists or empty fields in form"
                });
            });
    };

    render() {
        return (
            <div>
                <h1>Festival</h1>
                <p>{this.state.submitStatus}</p>
                <form onSubmit={this.onSubmit}>
                    <p>Title</p>
                    <input
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                    <p>Start Date</p>
                    <input
                        type="date"
                        name="start_date"
                        onChange={this.handleChange}
                    />
                    <p>End Date</p>
                    <input
                        type="date"
                        name="end_date"
                        onChange={this.handleChange}
                    />
                    <p>City</p>
                    <input
                        name="city"
                        onChange={this.handleChange}
                        value={this.state.city}
                    />
                    <p>Country</p>
                    <input
                        name="country"
                        onChange={this.handleChange}
                        value={this.state.country}
                    />
                    <br />
                    <button> Submit </button>
                </form>
            </div>
        );
    }
}

export default FestivalForm;
