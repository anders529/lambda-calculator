import React from "react";
import {numbers} from '../../../data';

const NumberButton = (props) => {
  return (
      <button className="styleBtn" onClick = {( ) => (

        props.snakeD(props.numberInfo)

      )} >{props.numberInfo}</button>
  );
};
export default NumberButton;