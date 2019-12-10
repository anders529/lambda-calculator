import React, {useState} from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Display from './components/DisplayComponents/Display';
import Logo from "./components/DisplayComponents/Logo";
import Specials from './components/ButtonComponents/SpecialButtons/Specials';

function App() {
  const [numbDisplay, setNumbDisplay] = useState(0);
  return (
    <div className="container">
      <Logo />
      <div className="App">
          <Display />
          <Specials />
          <Numbers />  
      <div className ="numbs">
        <Numbers />
        </div>
        <Operators />
      </div>
    </div>
  );
}

export default App;
