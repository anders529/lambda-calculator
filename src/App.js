import React, {useState} from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Display from './components/DisplayComponents/Display';
import Logo from "./components/DisplayComponents/Logo";
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';

function App() {
  const [numbDisplay, setNumbDisplay] = useState(0);
  return (
    <div className="container">
      <Logo />
      <div className="App">
          <Display />
          <Specials />
          <Numbers />  
          <Operators />
      </div>
    </div>
  );
}

export default App;
