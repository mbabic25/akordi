import React, { Component } from "react";
import axios from "axios";
import AsyncSelect from "react-select/lib/Async";
import { navigate } from "gatsby";
class Search extends Component {
  state = {
    pisme: [],
    chosenId: "",
  };

  componentDidMount = () => {
    axios.get("http://localhost:3000/pisme").then(response => {
      this.setState({
        pisme: response.data.map(song => ({
          value: song.id,
          label: song.ime,
        })),
      });
    });
  };
  filterSongs = searchTerm => {
    return this.state.pisme.filter(item => item.label.toLowerCase().indexOf(searchTerm.toLowerCase())>-1)
  };
  promiseOptions = inputValue =>
    new Promise(resolve => {
      resolve(this.filterSongs(inputValue));
    });
  handleChange = option => {
    this.setState({ chosenId: option.value });
  };
  render() {
    return (
      <>
        <form >
          <AsyncSelect
            id="input"
            cacheOptions
            defaultOptions
            loadOptions={this.promiseOptions}
            onChange={this.handleChange}
            placeholder="Upiši ime pjesme..."
          />
        </form>
        <button
          id="pretrazi"
          type="button"
          onClick={() => navigate("song#" + this.state.chosenId)}
        >
          Prikaži
        </button>
      </>
    );
  }
}

export default Search;
