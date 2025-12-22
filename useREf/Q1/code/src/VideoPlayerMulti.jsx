import { useRef, useState } from "react";
const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];


function VideoplayerMulti(){
    const VideoRef=useRef(null);
    const [CurrentvideoIndex, SetcurrentvideoIndex]=useState(0)
 const PlayVideo=()=>
        VideoRef.current.play();     
        const PauseVideo=()=>
        VideoRef.current.pause();     
        const ForwardVideo=()=>
        (VideoRef.current.currentTime+=5 )    
        const RewindVideo=()=>
        (VideoRef.current.currentTime-=5) 
const nextVideo=()=>{

    SetcurrentvideoIndex((prev)=>(prev+1)%videos.length)
}
const prevVideo=()=>{

    SetcurrentvideoIndex((prev)=>(prev-1+videos.length))
}



    return( 
         <div style={{ textAlign: "center" }}>
      <h2>Multi Video Player</h2>

      <video
        key={CurrentvideoIndex}
        ref={VideoRef}
        width="400"
        src={videos[CurrentvideoIndex]}
      />
       <div style={{ marginTop: "10px" }}>
        <button onClick={PlayVideo}>▶️ Play</button>
        <button onClick={PauseVideo}>⏸ Pause</button>
        <button onClick={RewindVideo}>⏪ Rewind</button>
        <button onClick={ForwardVideo}>⏩ Forward</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevVideo}>⏮ Previous</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
}

    

export default VideoplayerMulti;