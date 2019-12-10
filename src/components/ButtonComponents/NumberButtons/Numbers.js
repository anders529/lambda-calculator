import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';

const Numbers = (props) => {
  const [numState, setNumState] = useState(numbers);
  console.log(props.rock);
  return (
    <div>
     {
      numState.map((num, index) => (
        <NumberButton key={index} numberInfo={num} snakeD={props.rock} />
      ))
     }
  </div>
  );
};
export default Numbers;