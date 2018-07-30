import React, { Component } from "react";
import { connect } from "react-redux";
import { selectArtist, deselectArtist } from "../../actions/userActions";

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        };
    }
    componentColour = state => {
        if ((state = true)) {
            return { color: "green" };
        }
    };

    handleClick = () => {
        this.setState({ selected: !this.state.selected });
        if (!this.state.selected) {
            this.props.selectArtist(this.props.artist);
        } else {
            this.props.deselectArtist(this.props.artist);
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.festivalSelected !== this.props.festivalSelected) {
            this.setState({ selected: true });
        }
    }

    render() {
        return (
            <li
                style={
                    this.state.selected ? { color: "green" } : { color: "red" }
                }
                onClick={this.handleClick}
            >
                {this.props.artist.artist_name}
            </li>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected
});

export default connect(
    mapStateToProps,
    { selectArtist, deselectArtist }
)(Artist);
