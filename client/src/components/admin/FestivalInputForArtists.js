import AutoComplete from "react-autocomplete";
import React, { Component } from "react";

class FestivalInputForArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            artistsSelected: []
        };
    }

    onChange = event => {
        event.preventDefault();
        this.setState({ value: event.target.value });
        console.log(event, event.keyCode);
        if (event.keyCode === 13) {
            event.preventDefault();
            const artistsSelected = [
                ...this.state.artistsSelected,
                this.state.value
            ];
            this.setState({ artistsSelected });
            return;
        }
        return;
    };

    render() {
        const artistsSelected = this.state.artistsSelected.map(artist => {
            return <p key={artist}>{artist}</p>;
        });
        return (
            <div>
                <AutoComplete
                    items={this.props.artistsForAutoComplete}
                    shouldItemRender={(item, value) =>
                        item.label.toLowerCase().indexOf(value.toLowerCase()) >
                        -1
                    }
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) => (
                        <div
                            key={item.id}
                            style={{
                                backgroundColor: highlighted
                                    ? "#eee"
                                    : "transparent"
                            }}
                        >
                            {item.label}
                        </div>
                    )}
                    onChange={this.onChange}
                    // onSelect={value => {
                    //     const artistsSelected = [
                    //         ...this.state.artistsSelected,
                    //         value
                    //     ];
                    //     this.setState({ artistsSelected });
                    // }}
                    onSelect={value => this.setState({ value })}
                    value={this.state.value}
                />
                {artistsSelected}
            </div>
        );
    }
}

export default FestivalInputForArtists;
