import React, { useState } from "react";
// import Sound from 'react-sound';
// import TheOtherSide from '../the-other-side.mp3';

// const Playsound=(
//     handleSongLoading,
//     handleSongPlaying,
//     handleSongFinishedPlaying
// )=>{
//     const [isplaying,setIsplaying]=useState(false);

//     return(
//         <div>
//             <button onClick={()=>setIsplaying(!isplaying)}>{!isplaying ?'play':'stop'}</button>
//             <sound>
//                 url={TheOtherSide}
//                 playStatus={
//                     isplaying?Sound.status.PLAYING :Sound.status.STOPPED
//                 }
//                 playFromPosition={300}
//                 onLoading={handleSongLoading}
//                 onPlaying={handleSongPlaying}
//                 onFinishedPlaying={handleSongFinishedPlaying}
//             </sound>
//         </div>
//     )
// }
import useSound from 'use-sound';
import boopSfx from '../../sounds/boop.mp3';
const BoopButton = () => {
  const [play] = useSound(boopSfx);
  return <button onClick={play}>Boop!</button>;
};
export default Playsound;