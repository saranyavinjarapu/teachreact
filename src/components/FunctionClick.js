import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("functional component click button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
