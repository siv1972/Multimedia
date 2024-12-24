import React, { useState, useRef } from 'react';
import { FaHeadphonesAlt } from "react-icons/fa";


const DynamicAudioDisplay = ({path,name}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
 
  return (
    <div className="audio-player">
      {" "}<FaHeadphonesAlt size={30} />
      <span className="song-name">{(path.split("/")[2]+"").includes(".mp3")?path.split("/")[2].replace(".mp3","").replaceAll("_"," "):path.split("/")[2]?path.split("/")[2].replaceAll("_"," "):path.split("/")[2]}</span>
      <audio ref={audioRef} src={require(`../media/audio/${path}`)} preload="auto" />
      <button onClick={handlePlayPause}>
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </button>
    </div>
  );
};

export default DynamicAudioDisplay