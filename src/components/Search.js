import React, { Component } from "react";
import "./Search.css";
import axios from "axios";
import Comments from "./Comments.js";
class Search extends Component {
  state = {
    searchValue: "",
    songs: [],
    data: null,
    show: false,
    showPrev: false,
    index: 0,
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  makeApiCall = () => {
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
        q: this.state.searchValue,
        index: this.state.index,
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
    this.makeApiCall();
    this.setState({ show: true });
  };

  returnSongs = () => {
    // this.state.data?.data[i].preview
    let arr = [];
    arr = this.state.data?.data.map(function (song) {
      console.log(song);
      return (
        <div className="search-container">
          <p className="song-title">
            {song.artist.name} - {song.title}
          </p>
          <br></br>
          <audio className="songs" src={song.preview} controls></audio>
          <div>
            <a
              className="full-track"
              rel="noopener noreferrer"
              target="_blank"
              href={song.link}
            >
              Click Here For Full Track
            </a>
          </div>
          <Comments {...song} />
        </div>
      );
    });
    return arr;
  };

  render() {
    return (
      <div className="search">
        <p className="header para">Search Our Sounds</p>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
        />{" "}
        <button onClick={this.handleSearch}>Search</button>
        <br></br>
        <div className="nextPrevBtns">
          {this.state.show && (
            <button
              onClick={(event) =>
                this.setState(
                  { index: this.state.index + 25 },
                  this.handleSearch
                )
              }
            >
              Next
            </button>
          )}
          {this.state.index > 0 && (
            <button
              onClick={(event) =>
                this.setState(
                  { index: this.state.index - 25 },
                  this.handleSearch
                )
              }
            >
              Prev
            </button>
          )}
        </div>
        <div id="songs">{this.returnSongs()}</div>
        <div className="nextPrevBtns">
          {this.state.show && (
            <button
              onClick={(event) =>
                this.setState(
                  { index: this.state.index + 25 },
                  this.handleSearch
                )
              }
            >
              Next
            </button>
          )}
          {this.state.index > 0 && (
            <button
              onClick={(event) =>
                this.setState(
                  { index: this.state.index - 25 },
                  this.handleSearch
                )
              }
            >
              Prev
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
