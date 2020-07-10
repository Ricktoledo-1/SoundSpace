import React, { Component } from "react";
import axios from "axios";
class Artists extends Component {
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/artist/%7Bid%7D",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "3e5b90cb4emsh4609cea4ac6308dp1b5ce5jsn1be3f148de5c",
        useQueryString: true,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  hey = () => {
    console.log(this.state.artist);
  };
  render() {
    this.hey();
    return <div></div>;
  }
}

export default Artists;
