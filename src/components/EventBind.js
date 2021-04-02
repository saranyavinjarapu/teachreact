import React, { Component } from "react";

class EventBind extends Component {
  clickHandler() {
    this.setState({
      message: "goobye",
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/*<button onClick={this.clickHandler}>Click(for event bind)</button>*/
        /*above way of calling even handler does not work in class comp due to this
            keyword in class comp. binding should be done as below.note that there are
            mutiple ways to bind event handlers for class comp*/}

        <button onClick={() => this.clickHandler()}>
          Click(for event bind)
        </button>
      </div>
    );
  }
}

export default EventBind;
