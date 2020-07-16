import React, { Component } from "react";
import axios from "axios";

class Comments extends Component {
  state = {
    show: false,
    comments: [],
    comment: "",
  };

  getComments = async () => {
    this.setState({
      show: !this.state.show,
    });
    let res = await axios.get(
      `https://ironrest.herokuapp.com/findAll/soundspace?songId=${this.props.id}`
    );
    console.log(res);
    this.setState({
      comments: res.data,
    });
  };
  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.comment, this.props.id);
    let res = await axios.post(`https://ironrest.herokuapp.com/soundspace`, {
      comment: this.state.comment,
      songId: String(this.props.id),
    });
    console.log(res.data.ops[0]);
    let comments = [...this.state.comments];
    comments.unshift(res.data.ops[0]);
    this.setState({
      comments,
    });
  };
  showComments = () => {
    return this.state.comments.map((eachComment) => {
      return (
        <div className="commentContainer">
          <p className="comment">{eachComment.comment}</p>
        </div>
      );
    });
  };
  render() {
    //console.log(this);
    return (
      <div>
        <button id="comment-button" onClick={this.getComments}>
          New Comment
        </button>
        {this.state.show ? (
          <React.Fragment>
            <form className="comments-form" onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange}></input>
              <input id="submit" type="submit"></input>
            </form>
            {this.showComments()}
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

//axios.delete("https://ironrest.herokuapp.com/deleteCollection/soundspace");
export default Comments;
