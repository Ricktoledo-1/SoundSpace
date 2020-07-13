import React from "react";

import Search from "./components/Search";
import Random from "./components/random";
import Header from "./components/header";
import Artists from "./components/Artists";
import Videos from "./components/Videos";

import "./App.css";
import { Switch, Route } from "react-router-dom";

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
        <Header />
        <header className="App-header">
          <span>Sound Space</span>
        </header>
        <Switch>
          <Route exact component={Random} path="/components/random" />
          <Route exact component={Artists} path="/components/Artists" />
          <Route exact component={Videos} path="/components/Videos" />
          <Route exact component={Search} path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
