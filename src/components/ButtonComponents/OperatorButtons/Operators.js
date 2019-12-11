import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton'

const Operators = () => {
const [opers] = useState(operators);
  return (
    <div>
      {
      opers.map((p2, index) => (
          <OperatorButton key = {index} operBtn={p2}/>
      ))
      }
    </div>
  );
};
export default Operators;