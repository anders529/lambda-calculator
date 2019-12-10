import React from "react";
import {numbers, operators, specials} from '../../../data';

const NumberButton = (props) => {
  return (
    <div>
      <button>{props.nmbrz}</button>
    </div>
  );
};
export default NumberButton;