import React from "react";
import {numbers, operators, specials} from '../../../data';

const NumberButton = (props) => {
  const {numbrz, setNumDisplay} = props;

  return (
    <div>
      <button onClick={() => {
        setNumbDisplay(numbrz);
      }
     } >{numbrz}</button>
    </div>
  );
};
export default NumberButton;