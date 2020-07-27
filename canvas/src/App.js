import React, { useState, useCallback, useRef } from 'react';
import Grid from './components/Grid';
import './App.css';
import Rules from './components/Rules';
import { PlayContainer } from './styled/index';

function App() {

  return(
    <div className="App">
      <h1>Lando's Game of Life</h1>
      <PlayContainer>
        <Grid />
        <Rules />
      </PlayContainer>
    </div>
  ) 
}

export default App;
