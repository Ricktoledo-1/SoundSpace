import React, { Component } from "react";
import "./Search.css";
import axios from "axios";

class Search extends Component {
  state = {
    searchValue: "",
    songs: [],
    data: null,
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  makeApiCall = (searchInput) => {
    axios({
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "3e5b90cb4emsh4609cea4ac6308dp1b5ce5jsn1be3f148de5c",
        useQueryString: true,
      },
      params: {
        q: searchInput,
        index: 25,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  returnSongs = () => {
    // this.state.data?.data[i].preview
    let arr = [];
    arr = this.state.data?.data.map(function (song) {
      return <audio className="songs" src={song.preview} controls></audio>;
    });
    return arr;
  };

  render() {
    return (
      <div>
        <h1>Welcome to the sounds search</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        <div>{this.returnSongs()}</div>
      </div>
    );
  }
}
export default Search;
