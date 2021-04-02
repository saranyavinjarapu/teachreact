import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { parentName: "Parent" };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    //alert("Hello" + this.state.parentName);
    //below is ES6 template for the above statement
    alert(`hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
