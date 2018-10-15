import React, { Component } from 'react';
import Title from '../components/Title';

// Landing page will eventually contain top constellations of the day or something similar.
// At that time, the Search button will bring down a diagonal slide translucent search modal
//    that looks like the one in the initial spec (including the advanced search option at the
//    bottom)
// Feel free to recreate this search bar in that manner and link it from the search button in navigation

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchType: '',
      searchInput: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);

    console.log('this.state', this.state);
  }



	handleTextChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  handleRadioChange(event) {
    this.setState({
      searchType: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(`You selected ${this.state.searchType} searchType.`);
  }
	render() {
    console.log('this.props_sb', this.props);
    return (
      <div>
        <Title direction={this.props.direction}></Title>
        <form onSubmit={this.handleSubmit}>
          <input
            id="searchInput"
            type="text"
            placeholder=""
            value={this.state.searchInput}
            onChange={this.handleTextChange}
          />
          <p>
            <label>
              <input
                type = "radio"
                name="searchType"
                value="universe"
                onClick={this.handleRadioChange}
                onChange={this.handleRadioChange}
                checked={this.state.searchType === 'universe'}/>Universe
            </label>
            <label>
              <input
                type = "radio"
                name="searchType"
                value="constellation"
                onClick={this.handleRadioChange}
			          onChange={this.handleRadioChange}
                checked={this.state.searchType === 'constellation'}/>Constellations
            </label>
            <label>
              <input
                type = "radio"
                name="searchType"
                value="galaxy"
                onClick={this.handleRadioChange}
			          onChange={this.handleRadioChange}
                checked={this.state.searchType === 'galaxy'}/>Galaxies
            </label>
          </p>
        </form>
      </div>
    );
  }
}
export default SearchBar;
