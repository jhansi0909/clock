import React, { useState } from "react";
import { FaClock,FaStopwatch } from "react-icons/fa";
import { Link } from "react-router-dom";
import alaram from "../alaram.jpg";
import timer from "../timer.jpg"
var x,y,z
function Stopwatch()
{
    const [hours,setHours]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [seconds,setSeconds]=useState(0)
    const [stop,setStop]=useState(false)
    function Call(){
      y=seconds
      z=minutes
      x=setInterval(()=>{
        y=y+1
        setSeconds(seconds=>seconds+1);
        // setMinutes(minutes=>minutes+1)
       if(y==60){
          setMinutes(minutes=>minutes+1)
          console.log(seconds)
          console.log(minutes)
          setSeconds(0)
          z=z+1
          y=0
        }
         if(z==60){
          setHours(hours=>hours+1)
          console.log(minutes)
          setMinutes(0)
          z=0
        }
      },1000);
}
function Stop(){
   console.log("helooo")
   setStop(true)
   clearInterval(x)
   console.log(x)
}
function Reset(){
    setSeconds(0)
    setMinutes(0)
    setHours(0)
}
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
               {/* <div className="color"> <h1>{seconds}</h1></div> */}
               <div className="color">{hours}H:{minutes}M:{seconds}S</div>
               <div className="stop">
          <div><button className="starting" onClick={Call}>Start</button></div> 
          <div><button className="starting" onClick={Stop}>Stop</button></div>
        <div>{(stop==true)?<button className="starting" onClick={Reset}>Reset</button>:"" }</div></div>
        </div>
        </div>
    )
}
export default Stopwatch;