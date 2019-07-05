import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FiPlay, FiPause } from 'react-icons/fi';

function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
  return (
    <>
      {trackList.map((track, index) => (
        <div className='track' key={index}>
          <button className='button' onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? <FiPause /> : <FiPlay />}
          </button>
          <div className='song-title'>
            {track.name}
          </div>
        </div>
      ))}
    </>
  );
}

export default TrackList;
