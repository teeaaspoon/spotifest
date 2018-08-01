import React, { Component } from "react";
import { connect } from "react-redux";
import { selectFestival } from "../../actions/userActions";
import { resetGenre } from "../../actions/genreActions";


class Festival extends Component {
    handleClick = () => {
        this.props.selectFestival(this.props.festival);
        this.props.resetGenre()

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
    { selectFestival, resetGenre }
)(Festival);
