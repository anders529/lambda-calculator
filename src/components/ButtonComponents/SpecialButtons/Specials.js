import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';
const Specials = () => {
  const [data] = useState(specials); 
  return (
    <div>
        {data.map((special, index) => (
        <SpecialButton key={index} specBtn={special}/>
        ))
        }
    </div>
  );
};
export default Specials;