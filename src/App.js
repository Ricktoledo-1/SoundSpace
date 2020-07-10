import React from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import { Switch, Link, Route } from "react-router-dom";
import Random from "./components/random";
import Artists from "./components/Artists.js";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
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
        <Router>
          <Header />
          <header className="App-header">
            <span>Sound Space</span>
          </header>
          <Switch>
            <Route exact component={Random} path="/components/random" />
            <Route exact component={Artists} path="/components/Artists" />
            <Route exact component={Search} path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
