import { useRef } from "react";

function Videoplayer(){
     const VideoRef=useRef(null)
     const PlayVideo=()=>{
        VideoRef.current.play();     }
        const PauseVideo=()=>{
        VideoRef.current.pause();     }
        const ForwardVideo=()=>{
        VideoRef.current.currentTime+=5;     }
        const RewindVideo=()=>{
        VideoRef.current.currentTime-=5;     }

    return(

        <div style={{ textAlign: "center" }}>
            <h2>Custom Video Player</h2>
            <video
            ref={VideoRef}
            width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"/>

         <div style={{ marginTop: "10px" }}>
        <button onClick={PlayVideo}>▶️ Play</button>
        <button onClick={PauseVideo}>⏸ Pause</button>
        <button onClick={RewindVideo}>⏪ Rewind</button>
        <button onClick={ForwardVideo}>⏩ Forward</button>
      </div>
        </div>

    )




}
export default Videoplayer;