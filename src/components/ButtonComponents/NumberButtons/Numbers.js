import React from "react";
import {numbers, operators, specials} from '../../../data';
import NumberButton from './NumberButton';
const [numberState, setNumberState] = useState(numbers);
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
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