import React from "react";

function ChildComponents(props) {
  return (
    <div>
      {
        // <button onClick={props.greetHandler}>Greet Parent</button>
        // above way works fine if no props are to be passed
        //back to the method in parent comp but if you want to pass back
        //props to parent comp method use below arrow functions and
        //this is the easiest way to pass back props
      }

      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponents;
