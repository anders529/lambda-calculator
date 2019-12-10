import React from "react";

const OperatorButton = (props) => {
  return (
      <button onClick = {( ) => (
        console.log("button is clicked!")
      )
      className="operBtn">{props.operBtn.char}</button>
  );
};
export default OperatorButton;