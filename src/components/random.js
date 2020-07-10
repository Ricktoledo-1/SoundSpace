import React, { Component } from 'react';
import axios from "axios";
class Random extends Component { 
    randomLetter() {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random()* charactersLength));
  


}
componentDidMount() {

    let letter = this.randomLetter()
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
   
    render() { 
        return (
            <div>
                Done
            </div>
        );
    }
}

export default Random;