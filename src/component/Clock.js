import React, { useState,useEffect } from "react";
import { FaClock,FaStopwatch,FaAlaramClock, FaBed, FaBeer} from "react-icons/fa";
import { Link } from "react-router-dom";
import alaram from "../alaram.jpg"
import timer from "../timer.jpg"
const Clock=()=>{
 const [dateState, setDateState] = useState(new Date());
 useEffect(() => {
 setInterval(() => setDateState(new Date()), 1000);
 },[]);
     return(
  <div>
  <div className="navbar">
  <div className="alaramicon">
    <Link to="/Clock" className="icon">
      <FaClock/></Link>
    </div>
      <div className="alaramicon">
        <Link to="/Alaram">
      <img className="alaram" src={alaram}/></Link>
    </div>
    <div className="alaramicon">
      <Link to="/Timer">
      <img src={timer} className="timer"></img></Link>
    </div>
    <div className="alaramicon">
      <Link to="/Stopwatch" className="icon">
      <FaStopwatch/></Link>
      </div>
  </div>
  <div className="clock">
  <div className="time">
  <h4>Your time is</h4>
 <h4> {dateState.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second:'numeric',
  hour12: true,
 })}</h4>
 </div>
 </div>
 </div>
);
}
export default Clock;

