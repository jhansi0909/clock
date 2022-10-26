import React, { useEffect, useState } from "react";
import { FaClock,FaStopwatch} from "react-icons/fa";
import { Link } from "react-router-dom";
import alaram from "../alaram.jpg"
import timer from "../timer.jpg";
import audio1 from "../Audio1.mp3"
function Alaram()
{
var x
  const [alarmHours,setAH]=useState("");
  const [alarmMinutes,setAM]=useState("");
  const [stop,setStop]=useState()

  const setAlaram=()=>{
    var ah=document.querySelector(".hours").value;
    var am=document.querySelector(".minutes").value;
    setAH(ah)
    setAM(am)
    console.log(alarmHours + ":" + alarmMinutes);
    checkAlaram();
  }
  const stopAlaram=()=>{
    document.querySelector(".audio1").pause();
    document.querySelector(".audio1").currentTime=0;
    setStop(true);
    checkAlaram();
  }

  const checkAlaram=()=>{
    var x=setInterval(function(){
    var time=new Date();
    var curr_hr=time.getHours();
    var curr_mt=time.getMinutes();
    var curr_ss=time.getSeconds();
    console.log(curr_hr+":"+curr_mt);
    console.log(alarmHours + ":" + alarmMinutes);
    if(alarmHours==curr_hr && alarmMinutes==curr_mt && curr_ss <12){
    document.querySelector(".audio1").play();
    console.log("heloo")
    
   }
   if(stop==true){
    clearInterval(x);
   }
  
    },1000)
  }
  useEffect(()=>{
    checkAlaram();
  });
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
      <div className="clock1">
      {/* <input className="hours" placeholder="Hours" onChange={handleHours} ></input> */}
      <select className="hours">
      <option value="">00</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
      </select>
      <select className="minutes">
      <option value="N/A">00</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
    <option value="32">32</option>
    <option value="33">33</option>
    <option value="34">34</option>
    <option value="35">35</option>
    <option value="36">36</option>
    <option value="37">37</option>
    <option value="38">38</option>
    <option value="39">39</option> 
    <option value="40">40</option>
    <option value="41">41</option>
    <option value="42">42</option>
    <option value="43">43</option>
    <option value="44">44</option>
    <option value="45">45</option>
    <option value="46">46</option>
    <option value="47">47</option>
    <option value="48">48</option>
    <option value="49">49</option>
    <option value="50">50</option>
    <option value="51">51</option>
    <option value="52">52</option>
    <option value="53">53</option>
    <option value="54">54</option>
    <option value="55">55</option>
    <option value="56">56</option>
    <option value="57">57</option>
    <option value="58">58</option>
    <option value="59">59</option>
    <option value="60">60</option>
  </select>
      {/* <input className="hours" placeholder="Minutes" onChange={handleMinutes} ></input> */}
      <select className="hours">
      <option value="N/A">N/A</option>
    <option value="AM">AM</option>
    <option value="PM">PM</option>
      </select>
      </div>
      <div className="start1">
     <button className="start" onClick={setAlaram}>Set Alaram </button>
     <button className="start" onClick={stopAlaram}>Stop Alaram </button>
      </div></div>
      <div>
        <audio className="audio1">
          <source src={audio1} type="audio/mp3"/>
        </audio>
      </div>
      </div>
);
}
export default Alaram;