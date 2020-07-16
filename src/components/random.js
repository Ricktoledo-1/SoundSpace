import React, { Component } from "react";
import axios from "axios";
import "./random.css";
import gif1 from "./images/musicAPI2.gif";

class Random extends Component {
  state = {
    data: null,
  };

  randomLetter() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  componentDidMount() {
    let letter = this.randomLetter();
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
        q: letter,
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
  }

  returnSongs = () => {
    // this.state.data?.data[i].preview
    let arr = [];
    arr = this.state.data?.data.map(function (song) {
      return (
        <div className="random-songs">
          <div className="random-song">
            <p className="song-title">
              {song.title} - {song.artist.name}
            </p>
            <audio className="random" src={song.preview} controls></audio>
            <div>
              <a
                className="random-track"
                rel="noopener noreferrer"
                target="_blank"
                href={song.link}
              >
                Click Here For Full Track
              </a>
            </div>
            <br></br>
          </div>
        </div>
      );
    });
    return arr;
  };

  render() {
    return (
      <div id = "discovery">
        {/* <img src ={gif1} alt ="sunny beach"/>  */}
        <p className="random-header para">Your Random Song Discovery</p>
        
        <button
          className="random-btn"
          onClick={(event) => this.componentDidMount()}
        >
          Refresh
        </button>
        <div>{this.returnSongs()}</div>;
      </div>
    );
  }
}

export default Random;
