import React from 'react';
import Grid from './components/Grid';
import './App.css';
import Rules from './components/Rules';
import About from './components/About';
import { PlayContainer, ParentDiv } from './styled/index';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {

  return(
    <ParentDiv className="App">
      <h1>Lando's Game of Life</h1>
      <PlayContainer className="grid-and-rules">
        <Grid />
        <Rules />
      </PlayContainer>
      <About />
      <footer style={{
        color: 'white',
        textAlign: 'center',
        marginBottom: '.5%'
      }}>landoDev <a style={{ 
        color: 'white',
      }} href="https://github.com/landoDev"><GitHubIcon /></a></footer>
    </ParentDiv>
    
  ) 
}

export default App;
