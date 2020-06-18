import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.case}</h2>
        <p>{this.props.death}</p>
        <p>{this.props.recover}</p>
      </div>
    );
  }
}
