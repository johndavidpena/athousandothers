import React, { useState } from 'react';

const MusicPlayerContext = React.createContext([{}, () => { }]);

const MusicPlayerProvider = props => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Track Name 1',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800375/A%20Thousand%20Others%20Audio/Track_Name_1.mp3'
      },
      {
        name: 'Track Name 2',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800381/A%20Thousand%20Others%20Audio/Track_Name_2.mp3'
      },
      {
        name: 'Track Name live',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800308/A%20Thousand%20Others%20Audio/Track_Name_live.mp3'
      },
      {
        name: 'Sketch live',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800350/A%20Thousand%20Others%20Audio/Sketch_1.mp3'
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
