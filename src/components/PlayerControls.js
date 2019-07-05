import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from 'react-icons/fi';

function PlayerControls() {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();

  return (
    <>
      <div className='controls'>
        <div className='current-track'>
          <span>{currentTrackName}</span>
        </div>
        <div>
          <button className="controlsBtn has-text-light has-background-grey-dark" onClick={playPreviousTrack} disabled={!currentTrackName}>
            <FiSkipBack />
          </button>
          <button className="controlsBtn has-text-light has-background-grey-dark" onClick={togglePlay} disabled={!currentTrackName}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
          <button className="controlsBtn has-text-light has-background-grey-dark" onClick={playNextTrack} disabled={!currentTrackName}>
            <FiSkipForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayerControls;
