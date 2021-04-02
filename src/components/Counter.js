import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    /* the below would not work as state cannot be modified directly,
        it might show increment value in console but not on UI as UI will not be
         rendered when state is being modified directly*/

    //  this.state.count = this.state.count + 1;
    //  console.log(this.state.count);

    //use setState instead

    /* this.setState(
      {
        count: this.state.count + 1,
      },
      //below is the callback for setState
      () => {
        console.log("callback value is", this.state.count);
      }
      );*/

    /*when trying to increment count by multiple times at once use prevState instead 
      of the above way as the above way would not work while calling increment multiple
      times as shown below in incrementMultipleTimes*/

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    //if you want to use the above with props, u can do smth like below

    /* this.setState((prevState, props) => ({
      count: prevState.count + props.addValue,
    }));*/
  }

  incrementMultipleTimes() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    /*calling increment method 5 times as above would not increment the count to 5
    and would rather print the same value i.e 1 , 5 times. its bcoz react groups multiple 
    setState calls into single update for better performace.*/
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment Counter</button>
        <button onClick={() => this.incrementMultipleTimes()}>
          Increment Multiple Times at Once
        </button>
      </div>
    );
  }
}

export default Counter;
