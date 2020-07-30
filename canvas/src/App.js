import React, { useEffect } from 'react';
// import { gsap } from "gsap/dist/gsap";
import {
  generateTransitionX
} from './animations/gsap'
import Grid from './components/Grid';
import './App.css';
import Rules from './components/Rules';
import About from './components/About';
import { PlayContainer, ParentDiv } from './styled/index';
import GitHubIcon from '@material-ui/icons/GitHub';


function App() {
  const title = React.createRef();
  // let split = new SplitText(title.current);
  useEffect(() => {
    generateTransitionX(title.current, 1, 100)
    // gsap.to(title.current, {duration: 1, x: 10})
  },[title]);
  return(
    <ParentDiv className="App">
      <h1 ref={title} id="webpage-title">Lando's Game of Life</h1>
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
