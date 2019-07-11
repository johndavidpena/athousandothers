import React, { useState } from 'react';

const MusicPlayerContext = React.createContext([{}, () => { }]);

const MusicPlayerProvider = props => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Pick Up',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800367/A%20Thousand%20Others%20Audio/Pick_Up.mp3'
      },
      {
        name: 'Fawn',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800348/A%20Thousand%20Others%20Audio/Fawn.mp3'
      },
      {
        name: 'Disclaimer',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800303/A%20Thousand%20Others%20Audio/Disclaimer.mp3'
      },
      {
        name: 'The Drawn (live)',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800308/A%20Thousand%20Others%20Audio/Track_Name_live.mp3'
      },
      {
        name: 'Stripper (live)',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800348/A%20Thousand%20Others%20Audio/Stripper_live.mp3'
      },
      {
        name: 'Jam (live)',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800350/A%20Thousand%20Others%20Audio/Sketch_1.mp3'
      },
      {
        name: 'Open Season (live)',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800309/A%20Thousand%20Others%20Audio/Open_Season_live.mp3'
      },
      {
        name: 'Disclaimer (live)',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800310/A%20Thousand%20Others%20Audio/Disclaimer_live.mp3'
      },
      {
        name: 'Fawn (live)',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800346/A%20Thousand%20Others%20Audio/Fawn_live.mp3'
      },
      {
        name: 'Pick Up (live)',
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800309/A%20Thousand%20Others%20Audio/Pick_Up_live.mp3'
      },
      {
        name: "Zak's tapes #1",
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800347/A%20Thousand%20Others%20Audio/Zak_Jazz.mp3'
      },
      // {
      //   name: 'Breathless - Travis',
      //   src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800370/A%20Thousand%20Others%20Audio/Breathless.mp3'
      // },
      {
        name: "Zak's tapes #2",
        src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800384/A%20Thousand%20Others%20Audio/Long_Zak_tapes.mp3'
      },
      // {
      //   name: "Zak's Buddy",
      //   src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800375/A%20Thousand%20Others%20Audio/Track_Name_1.mp3'
      // },
      // {
      //   name: 'The Forgotten',
      //   src: 'https://res.cloudinary.com/mimas-music/video/upload/v1562800381/A%20Thousand%20Others%20Audio/Track_Name_2.mp3'
      // },
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
