import React, { useState } from 'react';

// passing in an array with two values: an empty object, and an empty function, as the initial value
const MusicPlayerContext = React.createContext([{}, () => { }]);

const MusicPlayerProvider = props => {
  const [state, setState] = useState({
    tracks: [
      {
        name: 'Fawn',
      },
      {
        name: 'Pick Up',
      },
      {
        name: 'Stripper',
      },
    ],
  });

  return (
    /* put the state object and the setter function into an array, and pass that into our Context Provider’s value. This is why we passed in an array with an empty object and an empty function when creating the Context above */
    <MusicPlayerContext.Provider value={[state, setState]} >
      {props.children}
    </MusicPlayerContext.Provider>
  );
}

export { MusicPlayerContext, MusicPlayerProvider };

/* All we need to do to access the Context’s state is import it into a component and use the useContext Hook in React!

import { MusicPlayerContext } from "./MusicPlayerContext";

...

const [state, setState] = useContext(MusicPlayerContext);
*/