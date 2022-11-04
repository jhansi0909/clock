import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Clock from './component/Clock'
import Alaram from './component/Alaram';
import Timer from './component/Timer';
import Stopwatch from './component/Stopwatch';
import Online from './component/Online';
// import Playsound from './component/Sound';
function App() {
return (
    <div>
       <Routes>
       <Route path="/" element={<Clock></Clock>}></Route>
       <Route path="/Clock" element={<Clock></Clock>}></Route>
       <Route path="/Alaram" element={<Alaram></Alaram>}></Route>
       <Route path="/Timer" element={<Timer></Timer>}></Route>
       <Route path="/Stopwatch" element={<Stopwatch></Stopwatch>}></Route>
       <Route path="/Online" element={<Online></Online>}></Route>
       {/* <Route path="/Playsound" element={<Playsound></Playsound>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
