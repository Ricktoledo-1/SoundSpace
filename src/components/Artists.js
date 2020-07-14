import axios from "axios";
import "./Artists.css";
import React, { Component } from "react";

class Artists extends Component {
  state = {
    topArtists: [],
  };
  async componentDidMount() {
    let topArtists = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
    );
    console.log(topArtists);
    this.setState({ topArtists: topArtists.data.data });
  }
  showArtists = () => {
    return this.state.topArtists.map((eachArtist) => {
      return (
        <div>
          <p>{eachArtist.name}</p>
          <a href={eachArtist.link}>
            <img
              className="artist-img"
              alt={eachArtist.name}
              src={eachArtist.picture_big}
            ></img>
          </a>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="padding"></div>
        <span className="artist-header">Top 10 Featured Artists</span>
        <div className="padding"></div>
        <div className="artist-container">
          <div className="artists">{this.showArtists()}</div>;
        </div>
      </React.Fragment>
    );
  }
}

export default Artists;
