import React, { Component } from "react";
import { connect } from "react-redux";

class FestivalSelected extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.festivalSelected.title}</h1>
                <h2>Line up</h2>
                <ul>
                    <li>Bryan Kearney</li>
                    <li>James Dymond</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.festivalSelected.festivalSelected
});

export default connect(
    mapStateToProps,
    null
)(FestivalSelected);
