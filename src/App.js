// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
import React from 'react';
import './App.css';

import TrackList from './components/TrackList';
import PlayerControls from './components/PlayerControls';
import { MusicPlayerProvider } from './MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
      <div className="App">
        <h1>A Thousand Others</h1>
        <React.Fragment>
          <PlayerControls />
          <TrackList />
        </React.Fragment>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
