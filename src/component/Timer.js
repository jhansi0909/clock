import React, { useState } from "react";
import { FaClock,FaStopwatch} from "react-icons/fa";
import { Link } from "react-router-dom";
import alaram from "../alaram.jpg"
import timer from "../timer.jpg";
import audio1 from "../Audio1.mp3"
var x,y,z,a
function Timer()
{
  const [hours,setHours]=useState()
  const [minutes,setMinutes]=useState()
    const [seconds,setSeconds]=useState()
    const [start,setStart]=useState(false)
    function handleSeconds(seconds)
   {
      setSeconds(0)
      setSeconds(seconds.target.value)
      console.log(seconds)
   } 
   function handleMinutes(minutes){
    setMinutes(0)
    setMinutes(minutes.target.value)
  } 
   function handleHours(hours){
    setHours(0)
    setHours(hours.target.value)
    }
   function Call(){
      setStart(true) 
       y=seconds
       z=minutes
       a=hours
        x=setInterval(()=>{
            y=y-1
            setSeconds(seconds=>seconds-1)
            if(y==0 && z==0 && a==0){
              clearInterval(x)
              setSeconds(0)
              setMinutes(0)
              setHours(0)
              document.querySelector(".audio1").play();
            }
            else{
            if(y==0)
            {
               setSeconds(60)
              y=60
              setMinutes(minutes=>minutes-1)
              z=z-1 
              // if(z==-1){
              //   z=0
              //   y=0
              // }
              // else{
              //   setSeconds(60)
              //   setMinutes(0)
              //   y=60
              // }
             if(z==0){
              setHours(hours=>hours-1)
              a=a-1
              if(a==-1 && z==0){
                z=0
                a=0;
              }
              else{
                setMinutes(60)
                z=60
              }
            }
            } 
          }
        },100);
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
      <  FaStopwatch/></Link>
      </div>
  </div>
        <div className="clock">
             <div className="color">{hours}H:{minutes}M:{seconds}S</div>
             <div className="input">
            {(start==false)?<input placeholder="hours"className="seconds" onChange={handleHours}></input>:""}
            {(start==false)?<input placeholder="minutes"className="seconds" onChange={handleMinutes}></input>:""}
            {(start==false)?<input placeholder="seconds"className="seconds" onChange={handleSeconds}></input>:""}
            </div>
            <div>{(start==false)?<button className="start2" onClick={Call}>Start</button>:""}</div>
        </div>
        <div>
        <audio className="audio1">
          <source src={audio1} type="audio/mp3"/>
        </audio>
      </div>
        </div>
    )
}
export default Timer;