import React, { useState, useCallback, useRef } from 'react';
import Grid from './components/Grid';
import './App.css';

function App() {

  return(
    <div className="App">
      <h1>Lando's Game of Life</h1>
      <Grid />
    </div>
  ) 
}

export default App;
