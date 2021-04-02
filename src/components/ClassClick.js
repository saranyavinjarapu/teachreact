import React, { Component } from "react";

class ClassClick extends Component {
  classClickHandler() {
    console.log("class comp click me button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.classClickHandler}>Class Click me</button>
      </div>
    );
  }
}
export default ClassClick;
