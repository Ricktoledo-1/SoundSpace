import React, { Component } from "react";
import axios from "axios";
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
            data:response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  returnSongs = () => {
    // this.state.data?.data[i].preview
    let arr = [];
    arr = this.state.data?.data.map(function (song) {
      return <audio className="random-songs" src={song.preview} controls></audio>;
    });
    return arr;
  };

  render() {
    return <div>{this.returnSongs()}</div>;
  }
}

export default Random;
