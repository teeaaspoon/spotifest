import React, { Component } from "react";
import { connect } from "react-redux";
import { selectFestival } from "../../actions/userActions";

class Festival extends Component {
    handleClick = () => {
        this.props.selectFestival(this.props.festival);
    };
    render() {
        return <p onClick={this.handleClick}>{this.props.festival.title}</p>;
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected
});

export default connect(
    mapStateToProps,
    { selectFestival }
)(Festival);
