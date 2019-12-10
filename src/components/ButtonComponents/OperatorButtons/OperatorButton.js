import React from "react";

const OperatorButton = (props) => {
  return (
      <button className="operBtn">{props.operBtn.char}</button>
  );
};
export default OperatorButton;