import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
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
        q: "",
        index: 25,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Our App</header>
        <div className="featuredPost">
          <p>Search Bar</p>
        </div>
        <div className="spotifyPlayer">
          <p>Spotify player here</p>
        </div>
        <div className="otherPosts">
          <p>Other posts here</p>
        </div>
        <div className="footer">
          <p>Footer here</p>
        </div>
      </div>
    );
  }
}

export default App;
