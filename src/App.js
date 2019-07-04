// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
import React from 'react';
import './App.css';

import Tracklist from './Tracklist';
import { MusicPlayerProvider } from './MusicPlayerContext';

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Tracklist />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
