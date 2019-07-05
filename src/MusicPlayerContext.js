import React, { useState } from 'react';

const MusicPlayerContext = React.createContext([{}, () => { }]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Tank Operator',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1558617947/Original%20Music/tankOperator.mp3'
      },
      {
        name: 'Arms',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1558617910/Original%20Music/arms.mp3'
      },
      {
        name: 'Righteous',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557505652/Original%20Music/Righteous.mp3'
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
