import React from "react";
import {numbers} from '../../../data';

const NumberButton = (props) => {
  return (
      <button onClick = {( ) => (
        console.log("button is clicked!")
        
      )} >{props.numberInfo}</button>
  );
};
export default NumberButton;