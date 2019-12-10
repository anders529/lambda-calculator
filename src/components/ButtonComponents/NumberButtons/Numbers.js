import React from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {
  const [numState] = useState(numbers);
  return (
    <div>
        {
          numState.map((num, index) => {
            <NumberButton key = {index} numState={num}/>
          })
        }
    </div>
  );
};
export default Numbers;