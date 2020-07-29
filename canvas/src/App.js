import React from 'react';
import Grid from './components/Grid';
import './App.css';
import Rules from './components/Rules';
import About from './components/About';
import { PlayContainer, ParentDiv } from './styled/index';

function App() {

  return(
    <ParentDiv className="App">
      <h1>Lando's Game of Life</h1>
      <PlayContainer className="grid-and-rules">
        <Grid />
        <Rules />
      </PlayContainer>
      <About />
    </ParentDiv>
  ) 
}

export default App;
