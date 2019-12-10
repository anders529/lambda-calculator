import React from "react";
import {numbers, operators, specials} from '../../../data';
import NumberButton from './NumberButton';

const [numberState, setNumberState] = useState(numbers);

const Numbers = () => {
  const {setNumbDisplay} = props;
  return (
    <div>
        {
          numbers.map((numbrz) => {
            <NumberButton numbrz = {numbrz} key = {numbrz}
            setNumbDisplay={setNumbDisplay}/>
          })
        }
    </div>
  );
};
export default Numbers;