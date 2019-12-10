import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {
  const [numState, setNumState] = useState(numbers);
  return (
    <div>
     {
      numState.map((num, index) => (
        <NumberButton key={index} numberInfo={num} />
      ))
     }
  </div>
  );
};
export default Numbers;