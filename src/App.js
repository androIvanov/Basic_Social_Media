import React from 'react';
import {Router, Route} from 'react-router-dom';
import Parent from './Patent';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <Route exact path="/"><Parent /></Route>
        
      {/* </div> */}
    </Router>
  );
}

export default App;
