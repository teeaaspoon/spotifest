import React, { Component } from "react";
import { connect } from "react-redux";
import countryToContinent from "./mapData/countryToContinent.json"
import Festival from "./Festival.js"
import AutoComplete from "react-autocomplete";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'



class ListOfFestivals extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedYear: ""
    }
  }
  render() {
    const festivalsInContinent = this.props.festivals.filter(festival => countryToContinent[festival.country] === this.props.continent)
    const years = festivalsInContinent.map(festival => festival.title.slice(-4))
                              .filter((elem, pos, arr) => {
                                return arr.indexOf(elem) === pos;
                              });
    let festivalsInYear = festivalsInContinent.filter(festival => festival.title.slice(-4) === this.state.selectedYear)
    if (this.state.selectedYear === "") {
      festivalsInYear = festivalsInContinent
    }
    const festivals = festivalsInYear.map(festival => <Festival festival={festival} key={festival.id}/>)

    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
{/*        <Dropdown
          options={years}
          onChange={e =>
                this.setState({ selectedYear: e.target.value })
          }
          value={this.state.selectedYear || null}
          />*/}

        <AutoComplete
            items={years.map(year => {
                return {
                    id: year,
                    label: year
                };
            })}
            shouldItemRender={(item, value) =>
                item.label
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) > -1
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
            value={this.state.selectedYear}
            onChange={e =>
                this.setState({ selectedYear: e.target.value })
            }
            onSelect={value => this.setState({ selectedYear: value })}
          />
        {festivals}
      </div>
    )

  }


}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals,
    continent: state.continent.continent
});

export default connect(
    mapStateToProps,
    null
)(ListOfFestivals);