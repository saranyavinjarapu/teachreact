import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //destructuring props
    const { name, heroName } = this.props;
    return (
      <div>
        <h1>
          Welcome {name} a.ka {heroName}{" "}
        </h1>
      </div>
    );
  }
}

export default Welcome;
